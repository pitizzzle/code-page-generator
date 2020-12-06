export const noLanguageIdentifier = 'xxxx';

const supportedLanguages = Object.assign(Object.create(null), { // creates an object without inheriting properties like 'toString' from Object.prototype

    /* <filename_extension>: <prism_language_identifier> */

    'js': 'javascript',
    'html': 'markup',
    'xml': 'markup',
    'svg': 'markup',
    'sh': noLanguageIdentifier,
    'bash': noLanguageIdentifier,
    'txt': noLanguageIdentifier,
    'md': 'markdown',

});

export function getPrismLanguageIdentifier(filenameExtension) {
    return supportedLanguages[filenameExtension];
}

export function getSupportedFileExtensions() {
    return Object.keys(supportedLanguages);
}
