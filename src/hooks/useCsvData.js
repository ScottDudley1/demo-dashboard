import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useCsvData = (filename) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(`/data/${filename}`, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setData(result.data);
        setLoading(false);
      },
      error: (error) => {
        console.error('CSV load error:', error);
        setLoading(false);
      }
    });
  }, [filename]);

  return { data, loading };
};

export default useCsvData;