import { isNullish } from './isNullish.js';

/**
 * Returns the first argument passed that is not nullish value.
 * If all arguments passed are nullish, returns null.
 * @example
 *  var name;
 *  let value = getFirstNotNullish( name, 0 ) ';
 *  // yields value = 0
 * @example
 *  let string = '';
 *  let value = getFirstNotNullish( string, null, {} );
 *  //yields value = '';
 * @param ...values - list of arguments to search for a not nullish value.
 * @return {*|null}
 */
export const getFirstNotNullish = ( ...values ) =>{

    for( let value of values ){

        if ( !isNullish( value ) ){

            return value;

        }

    }

    return null;

};

export const get = getFirstNotNullish;

export const shortCircuit = getFirstNotNullish;