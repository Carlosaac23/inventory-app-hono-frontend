import type { Car } from '@/types';

export async function getCar(carID: string): Promise<Car> {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars`);

    if (!res.ok) {
      throw new Error(`Failed to fetch cars (${res.status})`);
    }

    const allCars: Car[] = await res.json();
    const currentCar = allCars.find((car: Car) => car.car_id === carID);

    if (!currentCar) {
      throw new Error(`Car with id ${carID} was not found.`);
    }

    return currentCar;
  } catch (error: unknown) {
    if (error instanceof Error) throw error;
    throw new Error(String(error));
  }
}
