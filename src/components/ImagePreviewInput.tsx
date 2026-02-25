import { SearchX } from 'lucide-react';

import { useImagePreview } from '@/hooks/useImagePreview';

import InfoDiv from './InfoDiv';
import Input from './Input';

export default function ImagePreviewInput() {
  const { debouncedImageUrl, hasError, setHasError, handleOnChange } =
    useImagePreview();

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
            <InfoDiv
              message='URL not found'
              isError={true}
              icon={<SearchX />}
            />
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
