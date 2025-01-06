import { Iconify } from '@/lib/utils';
import React from 'react';

export function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Iconify icon="svg-spinners:gooey-balls-2" className='text-primary text-4xl' />
    </div>
  );
}
