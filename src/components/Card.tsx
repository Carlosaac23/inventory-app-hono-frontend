import { Link } from 'react-router';

import type { Car } from '@/types/index';

import { useDeleteCar } from '@/hooks/useDeleteCar';
export default function Card(props: Car) {
  const { loading, handleDelete } = useDeleteCar();
  const { car_id, car_model, car_brand, car_color, car_year, car_photo } =
    props;

  return (
    <div className='rounded-md border border-neutral-300 p-4 shadow-sm transition-all duration-100 ease-out hover:shadow-md'>
      <h2 className='font-semibold capitalize'>{car_model}</h2>
      <strong>Brand:</strong> <p className='inline uppercase'>{car_brand}</p>
      <p className='capitalize'>
        <strong>Color:</strong> {car_color}
      </p>
      <p className='mb-3'>
        <strong>Year:</strong> {car_year}
      </p>
      <img
        className='h-40 rounded-md object-contain shadow-xs'
        src={car_photo}
        alt={`${car_model} in landscape`}
      />
      <div className='flex gap-2'>
        <Link to={`/${car_id}/edit`}>Edit</Link>
        <button
          onClick={() => handleDelete(car_id)}
          disabled={loading}
          type='button'
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}
