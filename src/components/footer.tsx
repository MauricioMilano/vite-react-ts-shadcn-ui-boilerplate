import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-border flex h-10 w-full items-center justify-center border-t text-sm'>
      by &nbsp;
      <Link to='https://mauriciomilano.mialo.top' className='text-primary'>
        Mauricio Milano
      </Link>
      &nbsp; {year}
    </footer>
  );
}
