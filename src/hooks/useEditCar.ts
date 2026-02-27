import type { UseFormSetError } from 'react-hook-form';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { toast } from 'sonner';

import type { FormInput } from '@/types';

import { queryClient } from '@/main';

export function useEditCar(setError: UseFormSetError<FormInput>) {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function editCar(data: FormInput) {
    setIsLoading(true);
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/${carId}/edit`;
      const res = await fetch(URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          car_model: data.car_model,
          car_brand: data.car_brand,
          car_color: data.car_color,
          car_year: Number(data.car_year),
          car_photo: data.car_photo
        })
      });

      if (!res.ok) {
        const { errors } = await res.json();
        errors.forEach((e: any) => {
          const fieldMap: Record<string, keyof FormInput> = {
            car_model: 'car_model',
            car_brand: 'car_brand',
            car_color: 'car_color',
            car_year: 'car_year',
            car_photo: 'car_photo'
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
