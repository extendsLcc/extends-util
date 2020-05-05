import { getFirstNotNullish } from '../../logic/getFirstNotNullish.js';

/**
 * Replace string characters matching the given pattern by the value of matched character in the given replaceMap
 * @example 1
 *  '1.000,00'.replaceMap( /[.,]/g, { '.': 'dot', ',': 'comma' } )
 *   //yields '1dot000comma00'
 * @example 2
 *  '157293'.replaceMap( /[\d]/g, { '1': 'one', '2': 'two', '3': 'three' } )
 *   //yields 'one57two9three'
 * @example 3
 *  'R$ 1.234,56', /[\D,.]/g, { '.': '', ',': '.' } , '' )
 *  // yields '1234.56'
 * @param {string} whichString - String to be replaced
 * @param {RegExp} replacePattern - Regex pattern to be replaced
 * @param {options} replaceMap - Object mapping which match should be replace by which value following this pattern: { <MatchValue>: <ReplaceWithValue> }
 * @param {string} defaultReplacer - Default value to replace matched substring if it's not found in replaceMap.
 *  By Default it will not replace the matched value if he is not found in replaceMap
 * @returns {string} - returns the given string replaced by replaceMap
 * @see {@link String.replace}
 */
export const replaceStringByMap = ( whichString, replacePattern, replaceMap, defaultReplacer ) => {

    return whichString.replace( replacePattern, function ( match ) {

        return getFirstNotNullish( replaceMap[match], defaultReplacer, match );

    } );

};