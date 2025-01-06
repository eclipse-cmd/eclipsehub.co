import { useCallback, Ref } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

export const useMergeRefs = <T>(...refs: PossibleRef<T>[]): Ref<T> =>
  useCallback((node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    });
  }, refs);
