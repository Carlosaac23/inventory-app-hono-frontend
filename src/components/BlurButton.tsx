import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
export default function BlurButton({
  isLoading,
  staticMessage,
  promiseMessage
}: {
  isLoading: boolean;
  staticMessage: string;
  promiseMessage: string;
}) {
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    setIsBlurring(true);
    const timer = setTimeout(() => setIsBlurring(false), 50);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <Button
        className='mt-5 transition-transform duration-200 ease-out active:scale-99'
        type='submit'
      >
        <p
          className={`${isBlurring ? 'blur-2xs' : ''} flex items-center gap-2 transition-all duration-100 ease-out`}
        >
          {isLoading ? (
            <>
              <Spinner data-icon='inline-start' /> {promiseMessage}
            </>
          ) : (
            <>{staticMessage}</>
          )}
        </p>
      </Button>
    </>
  );
}
