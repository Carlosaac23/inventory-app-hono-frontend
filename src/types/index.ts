import type {
  UseFormRegister,
  FieldErrors,
  Path,
  RegisterOptions
} from 'react-hook-form';

export interface Car {
  car_id: string;
  car_model: string;
  car_brand: string;
  car_color: string;
  car_year: number;
  car_photo: string;
}

export interface FormValues {
  model: string;
  brand: string;
  color: string;
  year: number;
  photo: string;
}

export interface InputProps {
  label: string;
  type: string;
  name: Path<FormValues>;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  rules?: RegisterOptions<FormValues, Path<FormValues>>;
}

export type InputImagePreviewProps = Pick<
  InputProps,
  'register' | 'errors' | 'rules'
> & { photoUrl: string };

export interface Form {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface HeaderButton {
  text: string;
  path: string;
}
