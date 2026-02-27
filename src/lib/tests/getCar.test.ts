import { describe, it, vi, expect, beforeEach } from 'vitest';

import { getCar } from '@/lib/getCar';

describe('getCars', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a object car', async () => {
    const mockCar = {
      car_id: '1',
      car_model: 'Corolla',
      car_brand: 'Toyota',
      car_color: 'White',
      car_year: 2020,
      car_photo: 'url'
    };

    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([mockCar])
        } as Response)
      )
    );

    const result = await getCar('1');
    expect(result).toEqual(mockCar);
  });
});
