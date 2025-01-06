'use client';

import { Base, NoData } from '@/components';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Base>
      <div className="flex justify-center items-center h-96">
        <NoData message="The blog post you are looking for does not exit!" />
      </div>
    </Base>
  );
}
