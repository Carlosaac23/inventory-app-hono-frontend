import { useQuery } from '@tanstack/react-query';

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
      <h1 className='my-5 text-center text-3xl font-semibold'>
        Cars Inventory
      </h1>
      <div
        className={`${isPending ? 'itemcs-center flex justify-center' : 'mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}
      >
        {isPending ? (
          <Spinner className='mx-auto my-10 size-8 text-neutral-400' />
        ) : (
          cars?.map((car: Car) => <Card key={car.car_id} {...car} />)
        )}
      </div>
    </>
  );
}
