import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import __dirname from './getDirname.js';
import generatePageMarkup from './generatePageMarkup.mjs';
import content from './content/content.mjs';


console.log('generating pages ..')
const distDirName = 'dist'
const distDirPath = `${__dirname}/${distDirName}`;
if (!existsSync(distDirPath)){
    mkdirSync(distDirPath);
}
for (const { filename, language, code } of content) {
    writeFileSync(`${distDirPath}/${filename}`, generatePageMarkup(code, language));
    console.log(`generated ${distDirName}/${filename}`);
}
console.log('finished');
