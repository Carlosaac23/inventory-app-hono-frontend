import { Button } from './ui/button';
import { Spinner } from './ui/spinner';

export default function SpinnerButton({ text }: { text: string }) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button disabled size='sm'>
        <Spinner data-icon='inline-start' />
        {text}
      </Button>
    </div>
  );
}
