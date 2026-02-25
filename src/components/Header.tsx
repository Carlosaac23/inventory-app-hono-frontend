import { Link } from 'react-router';

export default function Header() {
  return (
    <header className='flex justify-between bg-neutral-300 p-6'>
      <Link to='/'>
        <h1 className='font-bold uppercase md:text-3xl'>Car Inventory</h1>
      </Link>

      <nav className='flex gap-1 text-sm md:gap-3 md:text-lg'>
        <Link className='hover:underline hover:underline-offset-2' to='/'>
          Home
        </Link>
        <Link className='hover:underline hover:underline-offset-2' to='/cars'>
          Cars Inventory
        </Link>
        <Link className='hover:underline hover:underline-offset-2' to='/add'>
          Add Car
        </Link>
      </nav>
    </header>
  );
}
