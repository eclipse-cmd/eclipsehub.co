'use client';

import { Base, NoData } from '@/components';
import { FilterGroup, SnippetsCard } from '@/components/app';
import { useSearchSnippets } from '@/core';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Page() {
  const { allCategories, results, filterCategory } = useSearchSnippets();

  useEffect(() => {
    toast.info('Design update.', {
      description: `This page may have some design issues that could cause unexpected behavior. If you are willing to help improve it, submit a PR on my GitHub repository.`,
      duration: 10000,
      cancel: {
        label: 'Ok',
        onClick: () => console.log('Ok!'),
      },
    });
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <Base>
      <section className="space-y-12 pt-10 md:pt-20 md:mt-10">
        <div className="x-container">
          <h4 className="mb-4 text-header-2 lg:max-w-2xl">Code Snippets</h4>
          <p className="text-lead">A curated collection of solutions to small challenges I've encountered in the past—each one is ready for copy-pasting 🙂</p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-3">
          <FilterGroup
            data={allCategories as any}
            onChange={(values) => {
              filterCategory(values);
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {results.length > 0 ? (
            results.map((snippet) => <SnippetsCard snippet={snippet} key={snippet._id} />)
          ) : (
            <div className="flex justify-center items-center col-span-2 mt-8 min-h-80">
              <NoData />
            </div>
          )}
        </div>
      </section>
    </Base>
  );
}
