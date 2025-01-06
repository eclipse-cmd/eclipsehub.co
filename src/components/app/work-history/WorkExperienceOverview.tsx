'use client';

import { cn, Iconify } from '@/lib/utils';
import { useEffect, useState } from 'react';

type WorkExperienceOverviewProps = {
  overview: string;
};

export function WorkExperienceOverview({ overview }: WorkExperienceOverviewProps) {
  const [seeMore, setSeeMore] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <>
      <p className={cn('text-sm md:text-base mt-3 overflow-hidden', [seeMore ? 'h-fit' : 'h-28'])} dangerouslySetInnerHTML={{ __html: overview }} />
      {!seeMore ? (
        <div className="pt-2 relative">
          <button onClick={() => setSeeMore(true)} type="button" className="group relative z-10 underline flex justify-start items-center transition hover:text-primary">
            <Iconify icon="si:expand-more-alt-duotone" className="text-primary me-1 transition group-hover:rotate-180" />
            <span className="text-sm md:text-base">Show more</span>
          </button>
          <span className="absolute -top-[99px] left-0 right-0 w-full h-[100px] z-1 shadow-gradient pointer-events-none" />
        </div>
      ) : null}
    </>
  ) : null;
}
