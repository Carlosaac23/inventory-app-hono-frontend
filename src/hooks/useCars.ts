import { useState, useEffect } from 'react';

import type { Car } from '@/types/index';

import { getCars } from '@/lib/getCars';

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCars() {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      }
    }

    loadCars();
  }, []);

  return { cars, error };
}
