## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Updates

This theme is as modular when it comes to langauges as possible. whenever you add a new one, just edit data in the following locations:

- src\i18n\locales.ts
- src\i18n\ui.ts
- add image to src\assets\img\icons
- add names to public\map\metadata.json (only places that have been visited)

I have no idea if the code works for languages written right to left or top to bottom.