import type { Input } from '@/types';

export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  required,
  onChange
}: Input) {
  return (
    <>
      <label className='mb-1' htmlFor={id}>
        {label}
      </label>
      <input
        className='mb-3 rounded-sm border border-neutral-400 p-2 shadow-sm focus:outline-offset-2 focus:outline-neutral-700 focus:outline-solid'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </>
  );
}
