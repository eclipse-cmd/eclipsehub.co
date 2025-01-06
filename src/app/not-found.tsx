'use client';

import { Base } from '@/components';

export default function Page() {
  return (
    <Base>
      <div className="flex justify-center items-center flex-col h-96 absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8v3a1 1 0 0 0 1 1h3m0-4v8m10-8v3a1 1 0 0 0 1 1h3m0-4v8m-11-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"
          />
        </svg>
        <span>The page you are looking for does not exit!</span>
      </div>
    </Base>
  );
}
