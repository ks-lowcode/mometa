export = getIdentitySourceMap;
/**
 * Generates an identity source map from a source file.
 * @param {string} source The content of the source file.
 * @param {string} resourcePath The name of the source file.
 * @returns {import('source-map').RawSourceMap} The identity source map.
 */
declare function getIdentitySourceMap(source: string, resourcePath: string): import('source-map').RawSourceMap;
