/**
 * Add leading zeros to left of a string util it's length is equal or greater than specified value.
 * @param {string} whichSting - string to manipulate.
 * @param {number} finalSize - final length/size desired for the manipulated string.
 * @return {string}
 */
export const addLeadingZero = function ( whichSting, finalSize ) {

    return String( whichSting ).padStart( finalSize, '0' );

};