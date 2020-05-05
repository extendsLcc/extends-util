import { parseCurrencyToDouble } from '../util/src/string/parse/parseCurrencyToDouble.js';

//  MASK INPUT INIT
/**
 * Apply BRL Currency format to given input element.
 * @param {jQuery} whichInput - input to receive the mask
 */
const inputMaskMoney = ( whichInput ) => {

    $( whichInput ).inputmask( 'currency', {
        alias: 'numeric',
        groupSeparator: '.',
        autoGroup: true,
        digits: 2,
        radixPoint: ',',
        digitsOptional: false,
        allowMinus: false,
        prefix: 'R$ ',
        autoUnmask: true,
        onUnMask: ( maskedValue, unmaskedValue ) => {
            return parseCurrencyToDouble( unmaskedValue );
        }
    } );

};