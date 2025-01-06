'use client';

import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

export const useClientTheme = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const clientTheme = useMemo(() => {
    return theme == 'system' ? systemTheme : theme;
  }, [theme, systemTheme, mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { theme: mounted && clientTheme ? clientTheme : 'dark' } as { theme: 'dark' | 'light' };
};
