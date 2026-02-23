import type { Car } from '@/types';

export async function getCar(carID: string) {
  try {
    const allCars = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/cars`
    ).then(data => data.json());
    const currentCar = allCars.find((car: Car) => car.car_id === carID);
    return currentCar;
  } catch (error) {
    console.error(error);
  }
}
