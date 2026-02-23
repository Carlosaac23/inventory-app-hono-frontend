import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';

import '@/index.css';
import App from '@/App.tsx';
import AddCarForm from '@/pages/AddCar';
import EditCarForm from '@/pages/EditCar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add' element={<AddCarForm />} />
        <Route path='/:carId/edit' element={<EditCarForm />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    <Toaster richColors={true} />
  </StrictMode>
);
