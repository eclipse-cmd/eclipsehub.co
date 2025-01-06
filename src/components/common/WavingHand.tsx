'use client';

import { useClientTheme } from '@/core/hooks/useClientTheme';

export const WavingHand = () => {
  const { theme } = useClientTheme();

  return (
    <span
      className="wave"
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
      {theme == 'dark' ? '👋🏼' : '👋🏿'}
    </span>
  );
};
