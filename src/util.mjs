import { readFileSync } from 'fs';
import rootDirname from './getRootDirname.js';

export function loadFile(pathRelativeToRoot) {
    return readFileSync(`${rootDirname}/${pathRelativeToRoot}`, { encoding: 'utf-8' });
}

export function escapeHTML(str) {
    const tempElement = document.createElement('div');
    tempElement.innerText = str;
    return tempElement.innerHTML;
}

