import { useState, useEffect } from 'react';

export const useCountdown = (initialDays = 4, initialHours = 14, initialMinutes = 48, initialSeconds = 18) => {
  // Convert initial values to total seconds
  const [totalSeconds, setTotalSeconds] = useState(() => {
    return initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    totalSeconds
  };
};
