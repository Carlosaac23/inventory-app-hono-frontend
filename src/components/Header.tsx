import { Link } from 'react-router';

export default function Header() {
  return (
    <header className='flex justify-between bg-neutral-300 p-6'>
      <Link to='/'>
        <h1 className='text-2xl font-bold uppercase'>Car Inventory</h1>
      </Link>

      <nav className='flex gap-3'>
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
