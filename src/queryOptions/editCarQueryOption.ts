import { queryOptions } from '@tanstack/react-query';

import { getCar } from '@/lib/getCar';

export default function editCarQueryOption(carId: string | undefined) {
  return queryOptions({
    queryKey: ['car', carId],
    queryFn: () => getCar(carId!),
    enabled: Boolean(carId)
  });
}
