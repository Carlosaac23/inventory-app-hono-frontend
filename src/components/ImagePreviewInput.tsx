import { useState, useEffect } from 'react';

import Input from './Input';

export default function ImagePreviewInput() {
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

  return (
    <>
      <Input
        label='Photo'
        type='text'
        name='photo'
        id='photo'
        placeholder='Image URL'
        onChange={handleOnChange}
      />
      <div>
        <p className='mb-2 font-semibold'>Preview:</p>
        {debouncedImageUrl &&
          (hasError ? (
            <p className='rounded-sm border border-red-400 bg-red-50 p-2 text-center font-medium text-red-500 capitalize'>
              Error loading image
            </p>
          ) : (
            <img
              className='mx-auto h-60 rounded-md object-contain shadow-md'
              src={debouncedImageUrl}
              alt=''
              onError={() => setHasError(true)}
            />
          ))}
      </div>
    </>
  );
}
