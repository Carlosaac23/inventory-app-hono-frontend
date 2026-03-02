import { useQuery } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Car } from '@/types/index';

import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { getCars } from '@/lib/getCars';

export default function Carspage() {
  const { data: cars, isPending } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  });

  return (
    <main>
      <h1 className='my-5 text-center text-3xl font-semibold'>
        Cars Inventory
      </h1>
      <div
        className={`${isPending ? 'flex items-center justify-center' : 'mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}
      >
        {isPending ? (
          <Spinner className='mx-auto my-10 size-8 text-neutral-400' />
        ) : (
          cars?.map((car: Car) => <Card key={car.car_id} {...car} />)
        )}
      </div>

      <Button className='fixed right-10 bottom-10 p-6'>
        <Link className='flex items-center gap-2' to='/add'>
          <PlusIcon /> Add Car
        </Link>
      </Button>
    </main>
  );
}
