import { useState, useEffect } from 'react';

export function usePhotoPreview(photoValue: string) {
  const [debouncedImageUrl, setDebouncedImageUrl] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedImageUrl(photoValue);
      setHasError(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [photoValue]);

  return { debouncedImageUrl, hasError, setHasError };
}
