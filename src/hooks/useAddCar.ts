import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import type { FormValues } from '@/types';

export function useAddCar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function addCar(data: FormValues) {
    setIsLoading(true);
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/add`;
      const res = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          car_model: data.model,
          car_brand: data.brand,
          car_color: data.color,
          car_year: data.year,
          car_photo: data.photo
        })
      });

      const { msg } = await res.json();
      toast.success(msg);
      navigate('/cars');
    } catch (error: any) {
      toast.error(error?.msg ?? 'Failed to add car');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    addCar
  };
}
