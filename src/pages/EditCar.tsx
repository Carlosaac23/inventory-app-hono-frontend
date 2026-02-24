import { useQuery } from '@tanstack/react-query';
import { ShieldAlert } from 'lucide-react';
import { useParams } from 'react-router';

import BlurButton from '@/components/BlurButton';
import InfoDiv from '@/components/InfoDiv';
import { useEditCar } from '@/hooks/useEditCar';
import editCarQueryOption from '@/queryOptions/editCarQueryOption';

export default function EditCarForm() {
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
      <h1>Edit car</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='model'>Model</label>
        <input
          className='border'
          type='text'
          name='model'
          id='model'
          defaultValue={car_model}
        />

        <label htmlFor='brand'>Brand</label>
        <input
          className='border'
          type='text'
          name='brand'
          id='brand'
          defaultValue={car_brand}
        />

        <label htmlFor='color'>Color</label>
        <input
          className='border'
          type='text'
          name='color'
          id='color'
          defaultValue={car_color}
        />

        <label htmlFor='year'>Year</label>
        <input
          className='border'
          type='number'
          name='year'
          id='year'
          defaultValue={car_year}
        />

        <label htmlFor='photo'>Photo</label>
        <input
          className='border'
          type='text'
          name='photo'
          id='photo'
          defaultValue={car_photo}
        />

        <BlurButton
          isLoading={isLoading}
          staticMessage='Update'
          promiseMessage='Updating...'
        />

        <h2>Current photo:</h2>
        <img
          className='h-80 rounded-md object-contain shadow-sm'
          src={car_photo}
          alt=''
        />
      </form>
    </>
  );
}
