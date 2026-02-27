import { describe, it, vi, expect, beforeEach } from 'vitest';

import { getCars } from '@/lib/getCars';

describe('getCars', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return an array of cars', async () => {
    const mockCars = [
      {
        car_id: '1',
        car_model: 'Corolla',
        car_brand: 'Toyota',
        car_color: 'White',
        car_year: 2020,
        car_photo: 'url'
      }
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCars)
        } as Response)
      )
    );

    const result = await getCars();
    expect(result).toEqual(mockCars);
  });
});
