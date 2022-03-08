import { lstat, readdir } from 'fs/promises';
import { join } from 'path';
import { PUBLIC_PATH } from './constants';

export const getPublicDirs = async () => {
  const fileNames: string[] = [];

  for (const item of await readdir(PUBLIC_PATH)) {
    if (await (await lstat(join(PUBLIC_PATH, item))).isDirectory()) {
      fileNames.push(item);
    }
  }

  return fileNames;
};
