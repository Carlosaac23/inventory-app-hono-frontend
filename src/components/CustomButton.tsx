import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
export default function CustomButton({
  isLoading,
  staticMessage,
  promiseMessage
}: {
  isLoading: boolean;
  staticMessage: string;
  promiseMessage: string;
}) {
  return (
    <div className='flex gap-2'>
      <Button className='mt-4 w-full' type='submit'>
        {isLoading ? (
          <>
            <Spinner data-icon='inline-start' /> {promiseMessage}
          </>
        ) : (
          <>{staticMessage}</>
        )}
      </Button>
    </div>
  );
}
