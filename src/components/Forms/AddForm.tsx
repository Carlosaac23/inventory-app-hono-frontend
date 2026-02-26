import { useForm } from 'react-hook-form';

import type { FormValues } from '@/types';

import BlurButton from '@/components/BlurButton';
import Form from '@/components/Form';
import Input from '@/components/Input';
import PhotoPreviewInput from '@/components/PhotoPreviewInput';
import { useAddCar } from '@/hooks/useAddCar';

export default function AddCarForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm<FormValues>();
  const { isLoading, addCar } = useAddCar(setError);

  const photoUrl = watch('photo', '');

  const onSubmit = handleSubmit(async data => {
    await addCar(data);
  });

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Add Car</h1>

      <Form onSubmit={onSubmit}>
        <Input
          label='Model'
          type='text'
          name='model'
          id='model'
          placeholder='Corolla'
          register={register}
          errors={errors}
          rules={{
            required: 'Model is required',
            minLength: {
              value: 3,
              message: 'Model must be at least 3 characters long'
            }
          }}
        />
        <Input
          label='Brand'
          type='text'
          name='brand'
          id='brand'
          placeholder='Toyota'
          register={register}
          errors={errors}
          rules={{
            required: 'Brand is required',
            minLength: {
              value: 3,
              message: 'Brand must be at least 3 characters long'
            },
            pattern: {
              value: /^[a-zA-Z\s-]+$/,
              message: 'Brand can only contain letters, spaces, and hyphens'
            }
          }}
        />
        <Input
          label='Color'
          type='text'
          name='color'
          id='color'
          placeholder='White'
          register={register}
          errors={errors}
          rules={{ required: 'Color is required' }}
        />
        <Input
          label='Year'
          type='number'
          name='year'
          id='year'
          placeholder='2007'
          register={register}
          errors={errors}
          rules={{
            required: 'Year is required',
            valueAsNumber: true,
            min: { value: 1886, message: 'Year must be 1886 or newer' },
            max: {
              value: new Date().getFullYear() + 1,
              message: 'Years is too far in the future'
            }
          }}
        />

        <PhotoPreviewInput
          register={register}
          errors={errors}
          rules={{ required: 'URL is required' }}
          photoUrl={photoUrl}
        />

        <BlurButton
          isLoading={isLoading}
          staticMessage='Add'
          promiseMessage='Adding...'
        />
      </Form>
    </>
  );
}
