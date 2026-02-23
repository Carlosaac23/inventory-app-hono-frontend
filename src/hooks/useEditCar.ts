import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import type { Car } from '@/types';

import { getCar } from '@/lib/getCar';

export function useEditCar() {
  const params = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      const carData = await getCar(params.id!);
      setCar(carData);
    };

    fetchCar();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body: any = Object.fromEntries(formData);

    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/${car?.car_id}/edit`;
      const res = await fetch(URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          car_model: body.model,
          car_brand: body.brand,
          car_color: body.color,
          car_year: parseInt(body.year) || new Date().getFullYear(),
          car_photo: body.photo
        })
      });

      const { msg } = await res.json();
      toast.success(msg);
      navigate('/');
    } catch (error: any) {
      toast.error(error.msg || 'Error updating car');
    } finally {
      setLoading(false);
    }
  };

  return { car, loading, handleSubmit };
}
