'use client';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from './search';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{ defaultTheme: 'light', enableSystem: false }}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
