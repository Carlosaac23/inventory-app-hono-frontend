import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

import type { Car } from '@/types/index';

import Card from '@/components/Card';
import { Spinner } from '@/components/ui/spinner';
import { getCars } from '@/lib/getCars';

export default function Cars() {
  const { data: cars, isPending } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  });

  return (
    <>
      <h1>Cars</h1>
      <div className='mx-8 flex gap-4'>
        {isPending ? (
          <Spinner className='mx-auto my-10 size-8 text-neutral-400' />
        ) : (
          cars?.map((car: Car) => <Card key={car.car_id} {...car} />)
        )}
      </div>

      <Link to='/add'>Add car</Link>
    </>
  );
}
