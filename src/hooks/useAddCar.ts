import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function useAddCar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const body: any = Object.fromEntries(formData);

    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/add`;
      const res = await fetch(URL, {
        method: 'POST',
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
      console.error(error);
      toast.error(error.msg);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    handleSubmit
  };
}
