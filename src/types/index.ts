import type { ReactNode, SubmitEventHandler } from 'react';
import type { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

import { z } from 'zod';

export const carSchema = z.object({
  car_id: z.uuid(),
  car_model: z
    .string()
    .min(1, 'Model is required')
    .min(3, 'Model must be at least 3 characters long'),
  car_brand: z
    .string()
    .min(1, 'Brand is required')
    .min(3, 'Brand must be at least 3 characters long')
    .regex(
      /^[a-zA-Z\s-]+$/,
      'Brand can only contain letters, spaces, and hyphens'
    ),
  car_color: z.string().min(1, 'Color is required'),
  car_year: z.coerce
    .number()
    .min(1, 'Years is required')
    .int('Year must be a whole number')
    .min(1886, 'Year must be 1886 or newer')
    .max(new Date().getFullYear() + 1, 'Year is too far in the future'),
  car_photo: z
    .string()
    .min(1, 'Photo URL is required')
    .pipe(z.url('Please anter a valid URL'))
});

export const formValuesSchema = carSchema.omit({ car_id: true });

export type Car = z.infer<typeof carSchema>;
export type FormInput = z.input<typeof formValuesSchema>;
export type FormOutput = z.output<typeof formValuesSchema>;
export interface InputProps {
  label: string;
  type: string;
  name: Path<FormInput>;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}

export interface InputPhotoPreviewProps extends Pick<
  InputProps,
  'register' | 'errors'
> {
  photoUrl: string;
}

export interface Form {
  children: ReactNode;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
}

export interface HeaderButton {
  text: string;
  path: string;
  icon?: ReactNode;
}
