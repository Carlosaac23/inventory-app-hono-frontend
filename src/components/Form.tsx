import type { Form } from '@/types';

export default function Form({ children, onSubmit }: Form) {
  return (
    <form
      className='mx-auto mb-10 flex w-150 flex-col rounded-md border border-neutral-300 p-4 shadow-sm'
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
