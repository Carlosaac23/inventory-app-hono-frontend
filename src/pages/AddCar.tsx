import BlurButton from '@/components/BlurButton';
import Form from '@/components/Form';
import ImagePreviewInput from '@/components/ImagePreviewInput';
import Input from '@/components/Input';
import { useAddCar } from '@/hooks/useAddCar';
export default function AddCarForm() {
  const { isLoading, handleSubmit } = useAddCar();

  return (
    <>
      <h1 className='my-6 text-center text-2xl font-bold'>Add Car</h1>

      <Form onSubmit={handleSubmit}>
        <Input
          label='Model'
          type='text'
          name='model'
          id='model'
          placeholder='Corolla'
          required={true}
        />
        <Input
          label='Brand'
          type='text'
          name='brand'
          id='brand'
          placeholder='Toyota'
          required={true}
        />
        <Input
          label='Color'
          type='text'
          name='color'
          id='color'
          placeholder='White'
          required={true}
        />
        <Input
          label='Year'
          type='number'
          name='year'
          id='year'
          placeholder='2007'
          required={true}
        />
        <ImagePreviewInput />

        <BlurButton
          isLoading={isLoading}
          staticMessage='Add'
          promiseMessage='Adding...'
        />
      </Form>
    </>
  );
}
