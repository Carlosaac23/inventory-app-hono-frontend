import { Link } from 'react-router';

export default function Header() {
  return (
    <header className='flex justify-between bg-neutral-300 p-6'>
      <Link to='/'>
        <h1 className='text-2xl font-bold uppercase'>Car Inventory</h1>
      </Link>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </header>
  );
}
