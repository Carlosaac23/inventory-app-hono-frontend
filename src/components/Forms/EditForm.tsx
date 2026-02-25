import { useQuery } from '@tanstack/react-query';
import { ShieldAlert } from 'lucide-react';
import { useParams } from 'react-router';

import BlurButton from '@/components/BlurButton';
import Form from '@/components/Form';
import InfoDiv from '@/components/InfoDiv';
import Input from '@/components/Input';
import { useEditCarForm } from '@/hooks/useEditCarForm';
import editCarQueryOption from '@/queryOptions/editCarQueryOption';

export default function EditForm() {
  const { carId } = useParams();
  const {
    data: car,
    isPending,
    isError,
    error
  } = useQuery(editCarQueryOption(carId));
  const { register, errors, onSubmit, isLoading } = useEditCarForm(car);

  if (!car) return <InfoDiv message='Car does not exist' isError={true} />;
  if (isPending) return <InfoDiv message='Loading...' isError={false} />;
  if (isError)
    return (
      <InfoDiv message={error.message} isError={true} icon={<ShieldAlert />} />
    );

  const { car_model, car_photo } = car;

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Edit Car</h1>

      <Form onSubmit={onSubmit}>
        <Input
          label='Model'
          type='text'
          name='model'
          id='model'
          register={register}
          errors={errors}
          rules={{
            required: 'Model is required',
            minLength: {
              value: 2,
              message: 'Model must be at least 2 characters'
            }
          }}
        />
        <Input
          label='Brand'
          type='text'
          name='brand'
          id='brand'
          register={register}
          errors={errors}
          rules={{
            required: 'Brand is required',
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
          register={register}
          errors={errors}
          rules={{ required: 'Color is required' }}
        />
        <Input
          label='Year'
          type='text'
          name='year'
          id='year'
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
        <Input
          label='Photo'
          type='text'
          name='photo'
          id='photo'
          register={register}
          errors={errors}
          rules={{ required: 'URL is required' }}
        />

        <h2 className='mb-2 font-semibold'>Current photo:</h2>
        <img
          className='h-80 rounded-md object-contain shadow-sm'
          src={car_photo}
          alt={`${car_model} in landscape`}
        />

        <BlurButton
          isLoading={isLoading}
          staticMessage='Update'
          promiseMessage='Updating...'
        />
      </Form>
    </>
  );
}
