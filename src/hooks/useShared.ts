import { useEffect, useState } from 'react';

export function useShared(initLinks?: string[]) {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => setLinks((prev: string[]) => initLinks || prev), []);

  return {
    openFile: (index: number) => {
      return () => {
        if (links) {
          window.location.assign(links[index]);
        }
      };
    },
  };
}
