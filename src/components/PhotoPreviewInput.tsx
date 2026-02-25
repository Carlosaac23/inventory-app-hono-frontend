import { SearchX } from 'lucide-react';

import type { InputImagePreviewProps } from '@/types';

import { usePhotoPreview } from '@/hooks/usePhotoPreview';

import InfoDiv from './InfoDiv';
import Input from './Input';

export default function PhotoPreviewInput({
  register,
  errors,
  rules,
  photoUrl
}: InputImagePreviewProps) {
  const { debouncedImageUrl, hasError, setHasError } =
    usePhotoPreview(photoUrl);

  return (
    <>
      <Input
        label='Photo'
        type='text'
        name='photo'
        id='photo'
        placeholder='Image URL'
        register={register}
        errors={errors}
        rules={rules}
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
