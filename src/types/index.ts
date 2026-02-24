export interface Car {
  car_id: string;
  car_model: string;
  car_brand: string;
  car_color: string;
  car_year: number;
  car_photo: string;
}

export interface Input {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: any) => void;
}

export interface Form {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
