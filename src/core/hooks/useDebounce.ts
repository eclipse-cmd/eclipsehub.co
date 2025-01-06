'use client';

import { useEffect, useMemo, useRef } from 'react';

/**
 * @param callback - The function to debounce.
 * @param delay - The delay in milliseconds for debouncing.
 * @returns A debounced function that delays invoking the callback.
 */
function debounce<Callback extends (...args: any[]) => void>(fn: Callback, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction = (...args: Parameters<Callback>) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debouncedFunction;
}

/**
 * @param callback - The callback function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced function that delays invoking the callback.
 */
export function useDebounce<Callback extends (...args: any[]) => void>(callback: Callback, delay: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const debounced = debounce((...args: Parameters<Callback>) => callbackRef.current(...args), delay);
    return debounced;
  }, [delay]);

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return debouncedCallback;
}
