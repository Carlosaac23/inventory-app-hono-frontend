export default function Footer() {
  return (
    <footer className='mt-auto bg-neutral-200 py-3 text-center text-sm'>
      <p>
        <a
          className='hover:underline hover:underline-offset-2'
          href='https://github.com/Carlosaac23'
          target='_blank'
          rel='noopener noreferrer'
        >
          Carlos Acosta
        </a>{' '}
        {new Date().getFullYear()} © Rights Reserved
      </p>
    </footer>
  );
}
