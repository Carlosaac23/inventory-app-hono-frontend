import { useState } from 'react';
import { toast } from 'sonner';
export function useDeleteCar() {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (carID: string) => {
    if (!confirm('Are you sure you want to delete this car?')) return;

    setLoading(true);

    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/${carID}/delete`;
      const res = await fetch(URL, { method: 'DELETE' });
      const { msg } = await res.json();
      toast.success(msg);
      window.location.reload();
    } catch (error: any) {
      toast.error(error.msg);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleDelete };
}
