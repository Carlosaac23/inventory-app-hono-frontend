import type { ReactNode } from 'react';

import { Spinner } from '@/components/ui/spinner';

export default function InfoDiv({
  message,
  isError,
  icon
}: {
  message: string;
  isError: boolean;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`${isError ? ' border-red-400 bg-red-50 text-red-700 ring-red-100' : ' border-neutral-400 bg-neutral-50 text-neutral-700 ring-neutral-100'} m-auto rounded-md border-2 px-6 py-4 text-lg shadow-md ring-1`}
    >
      {message && !isError ? (
        <p className='flex items-center gap-2'>
          <Spinner /> Loading...
        </p>
      ) : (
        <p className='flex items-center gap-2'>
          {icon} {message}
        </p>
      )}
    </div>
  );
}
