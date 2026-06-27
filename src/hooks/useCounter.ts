// src/hooks/useCounter.ts
import { useState, useEffect } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export const useCounter = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
}: UseCounterOptions) => {
  const [count, setCount] = useState<number>(start);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCounting(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isCounting) return;

    const startTime = Date.now();
    const difference = end - start;

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(start + difference * progress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end, duration, isCounting]);

  const formattedValue = `${prefix}${count.toLocaleString()}${suffix}`;

  return { count, formattedValue, isCounting };
};