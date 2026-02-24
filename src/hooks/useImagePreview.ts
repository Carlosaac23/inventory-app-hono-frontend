import { useState, useEffect } from 'react';

export function useImagePreview() {
  const [imageUrl, setImageUrl] = useState('');
  const [debouncedImageUrl, setDebouncedImageUrl] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);

    if (!e.target.value) {
      setDebouncedImageUrl('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedImageUrl(imageUrl);
      setHasError(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [imageUrl]);

  return { debouncedImageUrl, hasError, setHasError, handleOnChange };
}
