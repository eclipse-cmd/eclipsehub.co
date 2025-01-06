'use client';

import { Base, NoData } from '@/components';
import { BlogCard, FilterGroup, SearchBlog } from '@/components/app';
import { useSearchBlog } from '@/core/hooks/useSearchBlog';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Page() {
  const { results, allTags, defaultValue, setParams, filterCategory } = useSearchBlog();

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
      <section className="pt-10 md:pt-20 md:mt-10 lg:pb-10">
        <div className="x-container">
          <h4 className="mb-4 text-header-2 lg:max-w-2xl">Blog</h4>
          <p className="text-lead mb-4 lg:max-w-2xl">
            I've put together a collection of articles, insights, thoughts, and ideas on a bunch of interesting topics! You'll find insights on things such as system designs, best
            practices for software engineering, accessibility, DevOps, etc.
            <br />
            Have fun exploring them 🙂
          </p>
        </div>
        <div className="flex flex-col space-y-6 mt-10">
          <SearchBlog
            defaultValue={defaultValue}
            onChange={(value) => {
              setParams(value);
            }}
          />
          {results.length > 0 ? (
            <>
              <FilterGroup
                data={allTags}
                onChange={(values) => {
                  filterCategory(values);
                }}
              />
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((blog) => (
                  <BlogCard blog={blog} key={blog._id} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center col-span-2 mt-8 min-h-80">
              <NoData message="No blog posts." />
            </div>
          )}
        </div>
      </section>
    </Base>
  );
}
