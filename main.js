import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import Prism from 'prismjs';
import content from './content/content.mjs';
const stylesheet = readFileSync(`${__dirname}/content/syntax-highlighting.css`, { encoding: 'utf-8' });

function escapeHTML(str) {
    const tempElement = document.createElement('div');
    tempElement.innerText = str;
    return tempElement.innerHTML;
}

function generatePageMarkup (code, language) {
return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${ escapeHTML('Happy Coding <3') }</title>
        <style>
            ${ stylesheet }
        </style>
    </head>
    <body>
        ${ Prism.highlight(code, Prism.languages[language]) }
    </body>
</html>
`;
}


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