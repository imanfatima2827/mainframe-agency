import { useCallback, useEffect, useState } from 'react';

export interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export interface UseTypewriterResult {
  displayed: string;
  done: boolean;
  reset: () => void;
}

export function useTypewriter(
  text: string,
  speed = 38,
  startDelay = 600
): UseTypewriterResult {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [runId, setRunId] = useState(0);

  const reset = useCallback(() => {
    setRunId((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay, runId]);

  return { displayed, done, reset };
}
