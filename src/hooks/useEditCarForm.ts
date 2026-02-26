import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { FormValues, Car } from '@/types';

import { useEditCar } from './useEditCar';
export function useEditCarForm(car?: Car) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError
  } = useForm<FormValues>();
  const { isLoading, editCar } = useEditCar(setError);

  useEffect(() => {
    if (!car) return;

    reset({
      model: car.car_model,
      brand: car.car_brand,
      color: car.car_color,
      year: car.car_year,
      photo: car.car_photo
    });
  }, [car, reset]);

  const onSubmit = handleSubmit(async data => {
    await editCar(data);
  });

  return { register, errors, onSubmit, isLoading };
}
