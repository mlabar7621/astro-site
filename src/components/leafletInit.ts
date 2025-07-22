import L from 'leaflet';
//import * as pako from 'pako';

export function LeafletInit(locale: string){
  document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([48.8, 10.3], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    console.log('Initializing map with locale:', locale);

    const layersByLevel: { [level: number]: any } = {};
    const BASE_URL = import.meta.env.BASE_URL || '/';

    async function loadMetadata() {
      const res = await fetch('/astro-site/map/metadata.json');
      const tree = await res.json();
      return flattenTree(tree);
    }

    function flattenTree(node: any, flat: any[] = []) {
      if (Array.isArray(node)) {
        node.forEach(n => flattenTree(n, flat));
      } else if (node) {
        flat.push(node);
      }
      return flat;
    }

    function localizeName(nameObj: any) {
      return nameObj[locale] || nameObj['en'] || Object.values(nameObj)[0];
    }

    function filterByAdminLevel(node: any, maxLevel: number, results: any[] = []) {
      // If node has a level and it's too high, skip it and its children
      if (typeof node.level === 'number' && node.level > maxLevel) return results;

      let childAdded = false;

      // Recurse into children if any
      if (Array.isArray(node.children)) {
        node.children.forEach((child: any) => {
          const before = results.length;
          filterByAdminLevel(child, maxLevel, results);
          if (results.length > before) childAdded = true;
        });
      }

      // If this node is at or below the level, and no child was added, add this node
      if (typeof node.level === 'number' && node.level <= maxLevel && !childAdded) {
        results.push(node);
      }

      return results;
    }

    async function loadGeoJSON(url: string) {
      console.log(url);
      const cleanUrl = url.replace(/^\/+/, ''); // remove leading slashes
      const fullUrl = `${BASE_URL}/map/world/${cleanUrl}`;
      const res = await fetch(fullUrl);
      return await res.json(); // it's already decompressed by the browser
    }

    async function renderLevel(admin_level: number, metadata: any[]) {
      if (layersByLevel[admin_level]) {
        map.removeLayer(layersByLevel[admin_level]);
      }

      let entries: any[] = [];
      metadata.forEach(node => filterByAdminLevel(node, admin_level, entries));

      const layerGroup = L.layerGroup();

      await Promise.all(entries.map(async (entry: { file: string; name: any; }) => {
        try {
          const geojson = await loadGeoJSON(entry.file);
          const layer = L.geoJSON(geojson, {
            style: { color: '#3388ff', weight: 2, fillOpacity: 0.2 }
          }).bindPopup(localizeName(entry.name));
          layerGroup.addLayer(layer);
        } catch (err) {
          console.warn(`Failed to load ${entry.file}`, err);
        }
      }));

      layerGroup.addTo(map);
      layersByLevel[admin_level] = layerGroup;
    }

    function setupLevelSelector(metadata: any[]) {
      const select = document.getElementById('level-selector');
      if (select) {
        select.addEventListener('change', () => {
          const selectedLevel = (select as HTMLSelectElement).value;
          Object.values(layersByLevel).forEach(layer => map.removeLayer(layer));
          renderLevel(Number(selectedLevel), metadata);
        });
      }
    }

    // Bootstrapping everything
    (async function init() {
      const metadata = await loadMetadata();
      setupLevelSelector(metadata);
      renderLevel(4, metadata); // default level
    })();
  });
}