import Prism from 'prismjs';
import { loadFile } from './util.mjs';
import { stylesheet_filename } from '../config/config.mjs';
const stylesheet = loadFile(`config/${stylesheet_filename}`);

export default function generatePageMarkup(code, language) {
return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Coding &lt;3</title>
        <style>
            ${ stylesheet }
        </style>
    </head>
    <body>
        <pre class="language-javascript">
<code class="language-javascript">
${ Prism.highlight(code, Prism.languages[language]) }
</code>
        </pre>
    </body>
</html>
`;
}

