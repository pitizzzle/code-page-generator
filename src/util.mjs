import { readFileSync } from 'fs';
import rootDirname from './getRootDirname.js';

export function loadFile(pathRelativeToRoot) {
    return readFileSync(`${rootDirname}/${pathRelativeToRoot}`, { encoding: 'utf-8' });
}

