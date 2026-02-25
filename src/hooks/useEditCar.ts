import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import type { FormValues } from '@/types';

export function useEditCar() {
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
          car_year: data.year,
          car_photo: data.photo
        })
      });

      if (!res.ok) {
        throw new Error(`Failed editing car ${res.status}`);
      }

      const { msg } = await res.json();
      toast.success(msg);
      navigate('/cars');
    } catch (error: any) {
      toast.error(error?.msg ?? 'Error updating car');
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, editCar };
}
