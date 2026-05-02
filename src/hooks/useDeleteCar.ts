import { useState } from 'react';
import { toast } from 'sonner';

import { queryClient } from '@/main';
export function useDeleteCar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (carID: string) => {
    if (!confirm('Are you sure you want to delete this car?')) return;

    setIsLoading(true);

    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/cars/${carID}/delete`;
      const res = await fetch(URL, { method: 'DELETE' });
      const { msg } = await res.json();
      toast.success(msg);
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    } catch (error: any) {
      toast.error(error.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleDelete };
}
