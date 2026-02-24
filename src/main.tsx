import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';

import '@/index.css';
import Cars from '@/components/Cars';
import MainLayout from '@/layouts/MainLayout';
import AddCarForm from '@/pages/AddCar';
import EditCarForm from '@/pages/EditCar';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='cars' element={<Cars />} />
            <Route path='add' element={<AddCarForm />} />
            <Route path='cars/:carId/edit' element={<EditCarForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Analytics />
    <Toaster richColors={true} />
  </StrictMode>
);
