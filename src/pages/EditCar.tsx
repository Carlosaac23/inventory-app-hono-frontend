import { useEditCar } from '@/hooks/useEditCar';

export default function EditCarForm() {
  const { car, loading, handleSubmit } = useEditCar();

  if (!car) return <div>Loading...</div>;
  const { car_model, car_brand, car_color, car_year, car_photo } = car;

  return (
    <>
      <h1>Edit car</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='model'>Model</label>
        <input
          className='border'
          type='text'
          name='model'
          id='model'
          defaultValue={car_model}
        />

        <label htmlFor='brand'>Brand</label>
        <input
          className='border'
          type='text'
          name='brand'
          id='brand'
          defaultValue={car_brand}
        />

        <label htmlFor='color'>Color</label>
        <input
          className='border'
          type='text'
          name='color'
          id='color'
          defaultValue={car_color}
        />

        <label htmlFor='year'>Year</label>
        <input
          className='border'
          type='number'
          name='year'
          id='year'
          defaultValue={car_year}
        />

        <label htmlFor='photo'>Photo</label>
        <input
          className='border'
          type='text'
          name='photo'
          id='photo'
          defaultValue={car_photo}
        />

        <button className='border' type='submit' disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>

        <h2>Current photo:</h2>
        <img
          className='h-80 rounded-md object-contain shadow-sm'
          src={car_photo}
          alt=''
        />
      </form>
    </>
  );
}
