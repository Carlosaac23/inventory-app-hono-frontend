import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function useEditCar() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const body: any = Object.fromEntries(formData);

    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/${carId}/edit`;
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
      navigate('/cars');
    } catch (error: any) {
      toast.error(error.msg || 'Error updating car');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSubmit };
}
