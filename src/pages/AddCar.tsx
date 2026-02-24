import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import ImagePreviewInput from '@/components/ImagePreviewInput';
import Input from '@/components/Input';
import SpinnerButton from '@/components/SpinnerButton';
import { Button } from '@/components/ui/button';
import { useAddCar } from '@/hooks/useAddCar';
export default function AddCarForm() {
  const { isLoading, handleSubmit } = useAddCar();

  return (
    <main className='flex min-h-screen flex-col'>
      <Header />

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

        <Button
          className='mt-4 border bg-neutral-950 font-bold text-neutral-50 uppercase shadow-sm transition-transform duration-150 ease-out hover:cursor-pointer active:scale-97'
          type='submit'
        >
          {isLoading ? <SpinnerButton text='Adding...' /> : 'Add'}
        </Button>
      </Form>

      <Footer />
    </main>
  );
}
