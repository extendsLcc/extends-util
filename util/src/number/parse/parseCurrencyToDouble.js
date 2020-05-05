import { replaceStringByMap } from '../../string/manipulate/replaceStringByMap.js';

/**
 * Returns double value contained in currency formatted string.
 * @example
 *  parseCurrencyToDouble( 'R$1.234.567,89' )
 *  // yields 1234567.89
 * @param {string} whichCurrency - string containing formatted BRL currency.
 * @return {number}
 */
export const parseCurrencyToDouble = ( whichCurrency ) => {

    return parseFloat( replaceStringByMap( whichCurrency, /[\D.,-]/g,
        { '.': '', ',': '.', '-': '-' }, '' ) );

};