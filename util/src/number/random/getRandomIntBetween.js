/**
 * Get Random int Between the given range. Inclusive.
 * @param {number} min - minimum possible int value.
 * @param {number} max - maximum possible int value.
 * @return {number}
 */
export const getRandomIntBetween = (min, max) => {

    min = Math.ceil(min);
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;

};