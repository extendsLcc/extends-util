/**
 * Get ajax params from a form method, action and input values inside the form.
 * @param {jQuery} whichForm - Which form to extract the ajax attributes.
 * @return {{data: *, type: *, url: *}}
 */
const getFormAjaxAttributes = ( whichForm ) => {

    return {
        type: whichForm.attr( 'method' ),
        url: whichForm.attr( 'action' ),
        data: whichForm.serializeArray()
    }

};

const clearFormValues = ( whichForm ) => {

    whichForm.trigger( 'reset' );

};

const cacheFormData = (whichForm) => {

    whichForm.data('form-cache', whichForm.serializeArray());

};

const retriveCachedForm = ( whichForm ) => {

    whichForm.data( 'form-cache' ).forEach( ( cachedInput ) => {
        whichForm.find( `[name=${ cachedInput['name'] }]` ).val( cachedInput['value'] ).trigger( 'change' );
    } );

};

/**
 * Check if value is null or undefined.
 * @param valueReference - value to be checked.
 * @return {boolean}
 */
const isNullish = ( valueReference ) => {

    return valueReference == null;

};

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
const getFirstNotNullish = ( ...values ) =>{

    for( let value of values ){

        if ( !isNullish( value ) ){

            return value;

        }

    }

    return null;

};

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
const replaceStringByMap = ( whichString, replacePattern, replaceMap, defaultReplacer ) => {

    return whichString.replace( replacePattern, function ( match ) {

        return getFirstNotNullish( replaceMap[match], defaultReplacer, match );

    } );

};

/**
 * Returns double value contained in currency formatted string.
 * @example
 *  parseCurrencyToDouble( 'R$1.234.567,89' )
 *  // yields 1234567.89
 * @param {string} whichCurrency - string containing formatted BRL currency.
 * @return {number}
 */
const parseCurrencyToDouble = ( whichCurrency ) => {

    return parseFloat( replaceStringByMap( whichCurrency, /[\D.,-]/g,
        { '.': '', ',': '.', '-': '-' }, '' ) );

};

//  MASK INPUT INIT
/**
 * Apply BRL Currency format to given input element.
 * @param {jQuery} whichInput - input to receive the mask
 */
const maskInputForCurrency = ( whichInput ) => {

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

/**
 * Copy entire dom structure inside given element and print it in another page
 * @param whichElement
 */
const printElement = ( whichElement ) => {

    let cloneDom = $( whichElement ).clone();

    let printWindow = window.open( '', '_blank', '' );
    printWindow.document.close();
    $( printWindow.document.body ).append( cloneDom );
    $( printWindow.document.head ).append( $( 'link[href$=".css"]' ).add( 'style' ).clone() );

    $( printWindow ).ready( function () {

        printWindow.print();
        printWindow.close();

    } );

};

export { cacheFormData, clearFormValues, getFormAjaxAttributes, maskInputForCurrency, printElement, retriveCachedForm };
