import { useAddCar } from '@/hooks/useAddCar';
export default function AddCarForm() {
  const { handleSubmit } = useAddCar();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='model'>Model</label>
        <input className='border' type='text' name='model' id='model' />

        <label htmlFor='brand'>Brand</label>
        <input className='border' type='text' name='brand' id='brand' />

        <label htmlFor='color'>Color</label>
        <input className='border' type='text' name='color' id='color' />

        <label htmlFor='year'>Year</label>
        <input className='border' type='number' name='year' id='year' />

        <label htmlFor='photo'>Photo</label>
        <input className='border' type='text' name='photo' id='photo' />

        <button className='border' type='submit'>
          Add
        </button>
      </form>
    </>
  );
}
