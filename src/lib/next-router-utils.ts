'use client';

import { toQueryString } from './utils';

export function addQuery(
  routeData: {
    pathname: string;
    query: URLSearchParamsIterator<[string, string]>;
    router: any;
  },
  key: string,
  value: string | string[]
) {
  const { pathname, query, router } = routeData;

  const newQuery = toQueryString({ ...query, [key]: value.toString() });

  const href = `${pathname}?${newQuery}`;
  router.replace(href, undefined, { scroll: false });
}

export function removeQuery(
  routeData: {
    pathname: string;
    query: URLSearchParamsIterator<[string, string]>;
    router: any;
  },
  key: string
) {
  const { pathname, query, router } = routeData;

  const tempQuery = { ...Object.fromEntries(query) };
  delete tempQuery[key];

  const newQuery = toQueryString(tempQuery);

  const href = `${pathname}?${newQuery}`;

  router.replace(href, undefined, { scroll: false });
}

export const getBaseUrl = () => process.env.APP_URL;

export const getAbsoluteURL = (path: string) => getBaseUrl() + path;
