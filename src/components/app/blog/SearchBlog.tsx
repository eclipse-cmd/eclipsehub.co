'use client';

import { BaseInput } from '@/components';
import { useElementState, useMergeRefs, useSearchParams } from '@/core';
import { Iconify } from '@/lib/utils';
import { useRef } from 'react';

type SearchInputProps = {
  placeholder?: string;
  defaultValue?: string;
  onChange(value: string): void;
};

export function SearchBlog({ placeholder, defaultValue, onChange }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [setInputRef, inputStatus] = useElementState();
  const [setButtonRef, buttonStatus] = useElementState();

  const params = useSearchParams();

  const hasValue = params.searchString.length > 0;
  const isInteracting = ['hover', 'focus'].includes(inputStatus) || buttonStatus === 'hover';
  const showClear = hasValue && isInteracting;

  return (
    <form>
      <div className="relative lg:max-w-2xl">
        <BaseInput
          placeholder={placeholder || 'Search blog'}
          type="search"
          className="pr-16"
          defaultValue={defaultValue}
          id="query"
          ref={useMergeRefs(setInputRef, ref)}
          name="q"
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        <div className="button-group absolute top-0 bottom-0 right-0 h-full">
          {showClear ? ( //Todo: ShowClear is buggy
            <button
              type="button"
              ref={setButtonRef}
              className="transition text-muted-foreground hover:text-foreground h-full px-3"
              onClick={() => {
                const el = ref.current as HTMLInputElement;
                el.value = '';
                onChange?.('');
                setTimeout(() => {
                  el.focus();
                });
              }}
            >
              <Iconify icon="iconoir:cancel" className="size-8 lg:size-10" />
            </button>
          ) : (
            <button
              type="button"
              className="transition text-muted-foreground hover:text-foreground h-full px-3"
            >
              <Iconify icon="weui:search-outlined" className="size-8 lg:size-10" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
