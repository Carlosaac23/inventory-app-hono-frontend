import { useState, useEffect } from 'react';

export function useBlur(isLoading: boolean) {
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    setIsBlurring(true);
    const timer = setTimeout(() => setIsBlurring(false), 50);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return { isBlurring };
}
