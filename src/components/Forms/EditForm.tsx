import { useQuery } from '@tanstack/react-query';
import { ShieldAlert } from 'lucide-react';
import { useParams } from 'react-router';

import BlurButton from '@/components/BlurButton';
import Form from '@/components/Form';
import InfoDiv from '@/components/InfoDiv';
import Input from '@/components/Input';
import { useEditCar } from '@/hooks/useEditCar';
import editCarQueryOption from '@/queryOptions/editCarQueryOption';

export default function EditForm() {
  const { carId } = useParams();
  const { isLoading, handleSubmit } = useEditCar();
  const {
    data: car,
    isPending,
    isError,
    error
  } = useQuery(editCarQueryOption(carId));

  if (isPending) return <InfoDiv message='Loading...' isError={false} />;
  if (isError)
    return (
      <InfoDiv message={error.message} isError={true} icon={<ShieldAlert />} />
    );

  const { car_model, car_brand, car_color, car_year, car_photo } = car;

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Edit Car</h1>

      <Form onSubmit={handleSubmit}>
        <Input
          label='Model'
          type='text'
          name='model'
          id='model'
          defaultValue={car_model}
        />
        <Input
          label='Brand'
          type='text'
          name='brand'
          id='brand'
          defaultValue={car_brand}
        />
        <Input
          label='Color'
          type='text'
          name='color'
          id='color'
          defaultValue={car_color}
        />
        <Input
          label='Year'
          type='text'
          name='year'
          id='year'
          defaultValue={car_year}
        />
        <Input
          label='Photo'
          type='text'
          name='photo'
          id='photo'
          defaultValue={car_photo}
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
