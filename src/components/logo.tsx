import React from 'react';
import { Icon } from './dash';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/' className="flex items-center justify-center hover:text-primary">
      <Icon name="Activity" size="30" />
      <span className="ml-4 font-semibold text-2xl">aldestark</span>
    </Link>
  );
};
