import type { InputProps } from '@/types';
export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  defaultValue,
  register,
  errors,
  rules
}: InputProps) {
  console.log(errors);

  return (
    <>
      <label className='mb-1 font-semibold' htmlFor={id}>
        {label}
      </label>
      <input
        className={`${errors[name] ? 'border-red-400 outline-3 outline-red-200' : 'focus:border-neutral-400 focus:outline-3 focus:outline-neutral-200'} mb-2 rounded-sm border-2 border-neutral-300 p-2 shadow-sm`}
        type={type}
        id={id}
        {...register(`${name}`, rules)}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <p className='text-sm text-red-500'>{errors[name].message}</p>
      )}
    </>
  );
}
