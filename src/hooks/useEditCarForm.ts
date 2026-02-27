import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { FormInput, FormOutput, Car } from '@/types';

import { useEditCar } from '@/hooks/useEditCar';
import { formValuesSchema } from '@/types';
export function useEditCarForm(car?: Car) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError
  } = useForm<FormInput, any, FormOutput>({
    resolver: zodResolver(formValuesSchema)
  });
  const { isLoading, editCar } = useEditCar(setError);

  useEffect(() => {
    if (!car) return;

    reset({
      car_model: car.car_model,
      car_brand: car.car_brand,
      car_color: car.car_color,
      car_year: car.car_year,
      car_photo: car.car_photo
    });
  }, [car, reset]);

  const onSubmit = handleSubmit(async data => {
    await editCar(data);
  });

  return { register, errors, onSubmit, isLoading };
}
