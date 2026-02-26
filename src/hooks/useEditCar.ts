import type { UseFormSetError } from 'react-hook-form';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { toast } from 'sonner';

import type { FormValues } from '@/types';

import { queryClient } from '@/main';

export function useEditCar(setError: UseFormSetError<FormValues>) {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function editCar(data: FormValues) {
    setIsLoading(true);
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/${carId}/edit`;
      const res = await fetch(URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          car_model: data.model,
          car_brand: data.brand,
          car_color: data.color,
          car_year: Number(data.year),
          car_photo: data.photo
        })
      });

      if (!res.ok) {
        const { errors } = await res.json();
        errors.forEach((e: any) => {
          const fieldMap: Record<string, keyof FormValues> = {
            car_model: 'model',
            car_brand: 'brand',
            car_color: 'color',
            car_year: 'year',
            car_photo: 'photo'
          };
          const fieldName = fieldMap[e.path[0]];
          setError(fieldName, { message: e.message });
        });
        return;
      }

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['cars'] }),
        queryClient.invalidateQueries({ queryKey: ['car', carId] })
      ]);

      const { msg } = await res.json();
      toast.success(msg);
      navigate('/cars');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error?.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, editCar };
}
