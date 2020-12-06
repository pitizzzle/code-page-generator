import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import rootDirname from './getRootDirname.js';
import { loadFile } from './util.mjs';
import generatePageMarkup from './generatePageMarkup.mjs';
import { getPrismLanguageIdentifier, getSupportedFileExtensions } from './supportedLanguages.mjs';


// read content/input files
const contentDirName = 'content';
const codeFiles = readdirSync(`${rootDirname}/${contentDirName}`);
console.log(`found ${codeFiles.length} code files`);

// generate pages
console.log('generating pages ..');
const distDirName = 'dist';
const distDirPath = `${rootDirname}/${distDirName}`;

if (!existsSync(distDirPath)) {
    mkdirSync(distDirPath);
}

for (const filename of codeFiles) {

    let matchResult = filename.match(/^(.+)\.(.+)$/);
    if (!matchResult) {
        console.log(`skipped ${filename} (does not comply to *.* schema)`);
        continue;
    }
    const [_fullMatch, filenameBase, filenameExtension] = matchResult;

    let prismLanguageIdentifier = getPrismLanguageIdentifier(filenameExtension);
    if (!prismLanguageIdentifier) {
        console.log(`skipped ${filename} (file extension is not among the supported: ${getSupportedFileExtensions().map(x => '.' + x).join(', ')})`);
        continue;
    }

    const code = loadFile(`${contentDirName}/${filename}`);
    const pageHtml = generatePageMarkup(code, prismLanguageIdentifier);
    const newFilename = `${filenameBase}.html`;
    writeFileSync(`${distDirPath}/${newFilename}`, pageHtml);

    console.log(`generated ${distDirName}/${newFilename}`);
}
console.log('finished');
