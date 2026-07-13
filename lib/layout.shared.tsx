import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { githubUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img
            src="/rivly-docs-blue-no-bg.png"
            alt="Rivly"
            width={139}
            height={24}
            className="h-6 w-auto dark:hidden"
          />
          <img
            src="/rivly-docs-white-no-bg.png"
            alt="Rivly"
            width={139}
            height={24}
            className="hidden h-6 w-auto dark:block"
          />
        </>
      ),
    },
    githubUrl,
  };
}
