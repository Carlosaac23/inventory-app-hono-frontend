import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
export default function Homepage() {
  return (
    <main className='flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-12 px-6 py-12'>
      <section className='flex max-w-2xl flex-col items-center gap-6 text-center'>
        <h1 className='text-5xl font-bold tracking-tight text-foreground'>
          Car Inventory
        </h1>
        <p className='balance text-xl text-wrap text-muted-foreground'>
          Manage your vehicle collection with ease. Add, edit, and track all
          your cars in one place.
        </p>
      </section>

      <section className='flex gap-4'>
        <Link to='/cars'>
          <Button size='lg'>View Inventory</Button>
        </Link>
        <Link to='/add'>
          <Button size='lg' variant='outline'>
            Add Car
          </Button>
        </Link>
      </section>

      <section className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3'>
        <div className='flex flex-col items-center gap-2 rounded-lg border bg-card p-6 shadow-sm'>
          <span className='text-3xl font-bold text-primary'>📋</span>
          <p className='text-sm text-muted-foreground'>Track Vehicles</p>
        </div>
        <div className='flex flex-col items-center gap-2 rounded-lg border bg-card p-6 shadow-sm'>
          <span className='text-3xl font-bold text-primary'>📷</span>
          <p className='text-sm text-muted-foreground'>Photo Gallery</p>
        </div>
        <div className='flex flex-col items-center gap-2 rounded-lg border bg-card p-6 shadow-sm'>
          <span className='text-3xl font-bold text-primary'>✏️</span>
          <p className='text-sm text-muted-foreground'>Easy Editing</p>
        </div>
      </section>
    </main>
  );
}
