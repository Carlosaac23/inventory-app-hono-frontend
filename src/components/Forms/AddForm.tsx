import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { FormInput, FormOutput } from '@/types';

import BlurButton from '@/components/BlurButton';
import Form from '@/components/Form';
import Input from '@/components/Input';
import PhotoPreviewInput from '@/components/PhotoPreviewInput';
import { useAddCar } from '@/hooks/useAddCar';
import { formValuesSchema } from '@/types';

export default function AddCarForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm<FormInput, any, FormOutput>({
    resolver: zodResolver(formValuesSchema)
  });
  const { isLoading, addCar } = useAddCar(setError);

  const photoUrl = watch('car_photo', '');

  const onSubmit = handleSubmit(async (data: FormInput) => {
    await addCar(data);
  });

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Add Car</h1>

      <Form onSubmit={onSubmit}>
        <Input
          label='Model'
          type='text'
          name='car_model'
          id='car_model'
          placeholder='Corolla'
          register={register}
          errors={errors}
        />
        <Input
          label='Brand'
          type='text'
          name='car_brand'
          id='car_brand'
          placeholder='Toyota'
          register={register}
          errors={errors}
        />
        <Input
          label='Color'
          type='text'
          name='car_color'
          id='car_color'
          placeholder='White'
          register={register}
          errors={errors}
        />
        <Input
          label='Year'
          type='number'
          name='car_year'
          id='car_year'
          placeholder='2007'
          register={register}
          errors={errors}
        />

        <PhotoPreviewInput
          register={register}
          errors={errors}
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
