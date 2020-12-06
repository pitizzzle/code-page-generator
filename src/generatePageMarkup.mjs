import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
import escapeHtml from 'escape-html';
import { loadFile } from './util.mjs';
import { stylesheet_filename } from '../config/config.mjs';
import { noLanguageIdentifier } from './supportedLanguages.mjs';
const stylesheet = loadFile(`config/${stylesheet_filename}`);

export default function generatePageMarkup(code, prismLanguageIdentifier) {
    if (prismLanguageIdentifier !== noLanguageIdentifier) loadLanguages([prismLanguageIdentifier]);
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Coding &lt;3</title>
        <style>
            ${stylesheet}
        </style>
    </head>
    <body>
        <pre class="language-"><code class="language-">${(prismLanguageIdentifier === noLanguageIdentifier) ?
            escapeHtml(code) :
            Prism.highlight(code, Prism.languages[prismLanguageIdentifier])
        }</code></pre>
    </body>
</html>
`;
}

