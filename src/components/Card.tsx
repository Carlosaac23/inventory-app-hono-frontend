import type { Car } from '@/types/index';

export default function Card(props: Car) {
  const { car_model, car_brand, car_color, car_year, car_photo } = props;

  return (
    <div className='rounded-md border border-neutral-300 p-4 shadow-sm transition-all duration-100 ease-out hover:scale-101 hover:shadow-md'>
      <h2 className='font-semibold capitalize'>{car_model}</h2>
      <strong>Brand:</strong> <p className='inline uppercase'>{car_brand}</p>
      <p className='capitalize'>
        <strong>Color:</strong> {car_color}
      </p>
      <p>
        <strong>Year:</strong> {car_year}
      </p>
      <img
        className='mt-4 h-60 rounded-md object-contain shadow-xs'
        src={car_photo}
        alt={`${car_model} in landscape`}
      />
    </div>
  );
}
