import { SearchX } from 'lucide-react';

import type { InputPhotoPreviewProps } from '@/types';

import InfoDiv from '@/components/InfoDiv';
import { Input } from '@/components/ui/input';
import { usePhotoPreview } from '@/hooks/usePhotoPreview';

export default function PhotoPreviewInput({
  register,
  errors,
  photoUrl
}: InputPhotoPreviewProps) {
  const { debouncedImageUrl, hasError, setHasError } =
    usePhotoPreview(photoUrl);

  return (
    <>
      <Input
        label='Photo'
        type='text'
        name='car_photo'
        id='car_photo'
        placeholder='Photo URL'
        register={register}
        errors={errors}
      />
      <div>
        {debouncedImageUrl &&
          (hasError ? (
            <InfoDiv
              message='URL not found'
              isError={true}
              icon={<SearchX />}
            />
          ) : (
            <>
              <p className='mb-2 font-semibold'>Preview:</p>
              <img
                className='h-80 w-full rounded-md object-cover shadow-md'
                src={debouncedImageUrl}
                alt=''
                onError={() => setHasError(true)}
              />
            </>
          ))}
      </div>
    </>
  );
}
