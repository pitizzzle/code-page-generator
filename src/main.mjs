import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import rootDirname from './getRootDirname.js';
import { loadFile } from './util.mjs';
import generatePageMarkup from './generatePageMarkup.mjs';


const contentDirName = 'content';
const codeFiles = readdirSync(`${rootDirname}/${contentDirName}`);
console.log(`found ${codeFiles.length} code files`);

console.log('generating pages ..')
const distDirName = 'dist'
const distDirPath = `${rootDirname}/${distDirName}`;
if (!existsSync(distDirPath)){ mkdirSync(distDirPath); }
for (const filename of codeFiles) {
    let matchResult = filename.match(/^(.+)\.js$/);
    if (!matchResult) {
        console.log(`skipped ${filename} (currently only *.js files supported)`);
        continue;
    }
    const [_, filenameBase] = matchResult;
    const code = loadFile(`${contentDirName}/${filename}`);
    const pageHtml = generatePageMarkup(code, 'javascript');
    const newFilename = `${filenameBase}.html`
    writeFileSync(`${distDirPath}/${newFilename}`, pageHtml);
    console.log(`generated ${distDirName}/${newFilename}`);
}
console.log('finished');
