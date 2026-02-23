import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function useAddCar() {
  const navigate = useNavigate();
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [photo, setPhoto] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/add`, {
        method: 'POST',
        body: JSON.stringify({
          car_model: model,
          car_brand: brand,
          car_color: color,
          car_year: year,
          car_photo: photo
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { msg } = await res.json();

      setModel('');
      setBrand('');
      setColor('');
      setYear('');
      setPhoto('');
      navigate('/');
      toast.success(msg);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    model,
    setModel,
    brand,
    setBrand,
    color,
    setColor,
    year,
    setYear,
    photo,
    setPhoto,
    handleSubmit
  };
}
