import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';

import '@/index.css';
import Cars from '@/components/Cars';
import AddForm from '@/components/Forms/AddForm';
import EditForm from '@/components/Forms/EditForm';
import MainLayout from '@/layouts/MainLayout';
import Homepage from '@/pages/Homepage';

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='cars' element={<Cars />} />
            <Route path='add' element={<AddForm />} />
            <Route path='cars/:carId/edit' element={<EditForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Analytics />
    <Toaster richColors={true} />
  </StrictMode>
);
