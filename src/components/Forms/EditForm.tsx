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

  if (isPending) return <InfoDiv message='Loading...' isError={false} />;
  if (isError)
    return (
      <InfoDiv message={error.message} isError={true} icon={<ShieldAlert />} />
    );
  if (!car) return <InfoDiv message='Car does not exist' isError={true} />;

  const { car_model, car_photo } = car;

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Edit Car</h1>

      <Form onSubmit={onSubmit}>
        <Input
          label='Model'
          type='text'
          name='car_model'
          id='car_model'
          register={register}
          errors={errors}
        />
        <Input
          label='Brand'
          type='text'
          name='car_brand'
          id='car_brand'
          register={register}
          errors={errors}
        />
        <Input
          label='Color'
          type='text'
          name='car_color'
          id='car_color'
          register={register}
          errors={errors}
        />
        <Input
          label='Year'
          type='text'
          name='car_year'
          id='car_year'
          register={register}
          errors={errors}
        />
        <Input
          label='Photo'
          type='text'
          name='car_photo'
          id='car_photo'
          register={register}
          errors={errors}
        />

        <h2 className='mb-2 font-semibold'>Current photo:</h2>
        <img
          className='h-80 w-full overflow-hidden rounded-md object-cover shadow-sm'
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
