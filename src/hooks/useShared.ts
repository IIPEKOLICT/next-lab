export function useShared(links?: string[]) {
  return {
    openFile: (index: number) => {
      return () => {
        if (links) {
          window.location.href = links[index];
        }
      };
    },
  };
}
