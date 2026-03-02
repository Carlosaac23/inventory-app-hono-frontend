import { Link } from 'react-router-dom';

import type { HeaderButton } from '@/types';

import { Button } from '@/components/ui/button';
import { buttons } from '@/lib/buttons';
export default function Header() {
  return (
    <header className='flex justify-between bg-neutral-300 p-6'>
      <Link to='/'>
        <h1 className='font-bold uppercase md:text-3xl'>Car Inventory</h1>
      </Link>

      <nav className='flex gap-1'>
        {buttons.map((button: HeaderButton) => (
          <Link key={button.text} to={button.path}>
            <Button className='text-sm md:gap-3 md:text-lg' variant='ghost'>
              {button.text}
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
