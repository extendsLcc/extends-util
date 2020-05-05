/**
 * Normalizes all the whitespace in String value so that multiple spaces in between words are normalized to a single
 * space character. It also removes leading and trailing whitespace.
 * @param {string} whichString - string to be normalized
 * @returns {string} string - Given string without multiple whitespaces between words
 */
export const normalizeStringWhitespace = ( whichString ) => {

    return whichString.replace( /\s+/g, ' ' ).trim();

};