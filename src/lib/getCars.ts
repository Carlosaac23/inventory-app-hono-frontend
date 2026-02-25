import type { Car } from '@/types';

export async function getCars(): Promise<Car[]> {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars`);

    if (!res.ok) {
      throw new Error(`Failed to fetch cars (${res.status})`);
    }

    const cars: Car[] = await res.json();
    return cars;
  } catch (error: unknown) {
    if (error instanceof Error) throw error;
    throw new Error(String(error));
  }
}
