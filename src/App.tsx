import { Link } from 'react-router';

import type { Car } from '@/types/index';

import Card from '@/components/Card';
import { useCars } from '@/hooks/useCars';

export default function App() {
  const { cars, error } = useCars();

  if (error) return <span>Oops!</span>;

  return (
    <>
      <h1>Cars</h1>
      <div className='mx-8 flex gap-4'>
        {cars?.map((car: Car) => (
          <Card key={car.car_id} {...car} />
        ))}
      </div>
      <Link to='/add'>Add car</Link>
    </>
  );
}
