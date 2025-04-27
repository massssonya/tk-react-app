import { useState, useEffect } from 'react';
import styles from './cat-fetcher.module.css';
import { Controls } from '../controls';
import { CatImage } from '../cat-image';

export function CatFetcher() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [catUrl, setCatUrl] = useState<string>('');
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const fetchCat = async () => {
	try {
	const apiKey = import.meta.env.VITE_CAT_API_KEY;
	  const res = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`);
	  const data = await res.json();
	  setCatUrl(data[0]?.url || '');
	} catch (error) {
	  console.error('Error fetching cat:', error);
	}
  };


  useEffect(() => {
    if (enabled && autoRefresh) {
      const id = setInterval(() => {
        fetchCat();
      }, 5000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [enabled, autoRefresh]);

  return (
    <div className={styles.wrapper}>
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        onEnabledChange={() => setEnabled(prev => !prev)}
        onAutoRefreshChange={() => setAutoRefresh(prev => !prev)}
        onFetchCat={fetchCat}
      />
      <CatImage catUrl={catUrl} />
    </div>
  );
}
