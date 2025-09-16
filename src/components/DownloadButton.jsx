import { useEffect, useState } from 'react';

export default function DownloadButton({ file, label }) {
  const fileName = label || file.split('/').pop();
  const [fileSize, setFileSize] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const filePath = `${file}`;

    console.log(filePath);

    async function fetchFileInfo() {
      try {
        const response = await fetch(filePath, { method: 'HEAD' });
        if (!response.ok) throw new Error('File not found');
        const size = response.headers.get('content-length');
        setFileSize(formatBytes(size));
      } catch (err) {
        setError(true);
      }
    }

    fetchFileInfo();
  }, [file]);

  function handleDownload() {
    const a = document.createElement('a');
    const filePath = `${file}`;
    a.href = filePath;
    a.download = fileName;
    a.click();
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  if (error) return <button disabled>File not found</button>;

  return (
    <button onClick={handleDownload}>
      {fileSize ? `Download ${fileName} (${fileSize})` : 'Loading...'}
    </button>
  );
}
