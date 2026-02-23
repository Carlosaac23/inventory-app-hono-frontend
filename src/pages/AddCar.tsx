import { useAddCar } from '@/hooks/useAddCar';
export default function AddCar() {
  const {
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
  } = useAddCar();

  return (
    <>
      <form action='/add' method='POST' onSubmit={handleSubmit}>
        <label htmlFor='model'>Model</label>
        <input
          className='border'
          type='text'
          name='model'
          id='model'
          value={model}
          onChange={e => setModel(e.target.value)}
        />

        <label htmlFor='brand'>Brand</label>
        <input
          className='border'
          type='text'
          name='brand'
          id='brand'
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />

        <label htmlFor='color'>Color</label>
        <input
          className='border'
          type='text'
          name='color'
          id='color'
          value={color}
          onChange={e => setColor(e.target.value)}
        />

        <label htmlFor='year'>Year</label>
        <input
          className='border'
          type='number'
          name='year'
          id='year'
          value={year}
          onChange={e => setYear(e.target.value)}
        />

        <label htmlFor='photo'>Photo</label>
        <input
          className='border'
          type='text'
          name='photo'
          id='photo'
          value={photo}
          onChange={e => setPhoto(e.target.value)}
        />

        <button className='border' type='submit'>
          Add
        </button>
      </form>
    </>
  );
}
