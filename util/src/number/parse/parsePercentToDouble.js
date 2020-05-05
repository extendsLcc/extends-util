import { replaceStringByMap } from '../../string/manipulate/replaceStringByMap.js';

/**
 * Returns double value contained in percent formatted string.
 * @example
 *  parsePercentToDouble( '1.234.567,89%' )
 *  // yields 1234567.89
 * @param {string} whichPercent - string containing formatted percent.
 * @return {number}
 */
export const parsePercentToDouble = ( whichPercent ) => {

    return parseFloat( replaceStringByMap( whichPercent, /[\D.,-]/g,
        { '.': '', ',': '.', '-': '-' }, '' ) );

};