import Prism from 'prismjs';
import { escapeHTML } from './util.mjs';
const stylesheet = readFileSync(`${__dirname}/content/syntax-highlighting.css`, { encoding: 'utf-8' });

export default function generatePageMarkup(code, language) {
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
