import { Link } from 'react-router-dom';

import type { Car } from '@/types/index';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useDeleteCar } from '@/hooks/useDeleteCar';
export default function Card({
  car_id,
  car_model,
  car_brand,
  car_year,
  car_color,
  car_photo
}: Car) {
  const { isLoading, handleDelete } = useDeleteCar();

  return (
    <div className='group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='mb-3 overflow-hidden rounded-lg'>
        <img
          className='h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105'
          src={car_photo}
          alt={`${car_model} in landscape`}
        />

        {car_year === new Date().getFullYear() ? (
          <Badge className='absolute bottom-42 left-6 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'>
            Just released
          </Badge>
        ) : null}
      </div>

      <div className='flex flex-col gap-1 text-sm text-neutral-600'>
        <h3 className='text-lg font-semibold text-neutral-900'>
          {car_brand} {car_model}
        </h3>
        <p className='capitalize'>Color: {car_color}</p>
        <p>Year: {car_year}</p>
      </div>

      <div className='mt-auto flex gap-2 pt-4'>
        <Link
          to={`/cars/${car_id}/edit`}
          className='flex-1 rounded-lg border border-neutral-300 py-1.5 text-center text-sm font-medium transition duration-75 hover:bg-neutral-100'
        >
          Edit
        </Link>

        <Button
          className='flex-1 rounded-lg border border-red-300 bg-red-50 py-1.5 text-sm font-medium text-inherit transition duration-75 hover:bg-red-100 disabled:opacity-50'
          variant='destructive'
          type='button'
          disabled={isLoading}
          onClick={() => handleDelete(car_id)}
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </div>
  );
}
