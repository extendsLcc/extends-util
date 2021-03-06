/**
 * Check if value is null or undefined.
 * @param valueReference - value to be checked.
 * @return {boolean}
 */
const isNullish = ( valueReference ) => {

    return valueReference == null;

};

/**
 * Check if the value is undefined.
 * @param valueReference - value to be checked.
 * @return {boolean}
 */
const isUndefined = ( valueReference ) => {

    return typeof valueReference === 'undefined';

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

const get = getFirstNotNullish;

const shortCircuit = getFirstNotNullish;

const getNumbersFromString = ( whichString ) => {

    return String( whichString ).replace( /\D/g, '' );

};

function stripStringAccents( whichString ) {

    return whichString.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' )

}

const matchIgnoreAccents = ( firstString, secondString ) => {

    return stripStringAccents( firstString ) === stripStringAccents( secondString );

};

/**
 * Add leading zeros to left of a string util it's length is equal or greater than specified value.
 * @param {string} whichSting - string to manipulate.
 * @param {number} finalSize - final length/size desired for the manipulated string.
 * @return {string}
 */
const addLeadingZero = function ( whichSting, finalSize ) {

    return String( whichSting ).padStart( finalSize, '0' );

};

/**
 * Normalizes all the whitespace in String value so that multiple spaces in between words are normalized to a single
 * space character. It also removes leading and trailing whitespace.
 * @param {string} whichString - string to be normalized
 * @returns {string} string - Given string without multiple whitespaces between words
 */
const normalizeStringWhitespace = ( whichString ) => {

    return whichString.replace( /\s+/g, ' ' ).trim();

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

const localDateFormat = Intl.DateTimeFormat( 'pt-BR' );
/**
 * Format date string in format YYYY-MM-DD to DD/MM/YYYY
 * @param {string} whichDate - Date in format YYYY-MM-DD to be formatted
 * @returns {string} - Date string in the format DD/MM/YYYY
 */
const formatDateToLocalFormat = ( whichDate ) => localDateFormat.format( new Date(`${whichDate} 00:00` ) );

const formatDate = formatDateToLocalFormat;

const currencyNumberFormat = Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } );

/**
 * Format decimal number to BRL currency string format.
 * @param {number} whichDouble - decimal number to be formatted.
 * @param defaultValue - default value to return if {@link whichDouble} is Not a Number. Default: 'NaN'
 * @return {string}
 */
const formatDoubleToCurrency = ( whichDouble, defaultValue = 'NaN' ) => {

    return isNaN( whichDouble ) ? defaultValue : currencyNumberFormat.format( whichDouble );

};

const percentNumberFormat = Intl.NumberFormat( 'pt-BR', { style: 'percent', maximumFractionDigits: 2 } );

/**
 * Format decimal number to percent string format.
 * @param {number} whichDouble - decimal number to be formatted.
 * @param defaultValue - default value to return if {@link whichDouble} is Not a Number. Default: '0%'
 * @return {string}
 */
const formatDoubleToPercent = ( whichDouble, defaultValue = '0%' ) => {

    return isNaN( whichDouble ) ? defaultValue : percentNumberFormat.format( whichDouble / 100 );

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

/**
 * Returns double value contained in percent formatted string.
 * @example
 *  parsePercentToDouble( '1.234.567,89%' )
 *  // yields 1234567.89
 * @param {string} whichPercent - string containing formatted percent.
 * @return {number}
 */
const parsePercentToDouble = ( whichPercent ) => {

    return parseFloat( replaceStringByMap( whichPercent, /[\D.,-]/g,
        { '.': '', ',': '.', '-': '-' }, '' ) );

};

const getRandomDoubleBetween = (min, max) => {

    return Math.random() * (max - min ) + min;

};

/**
 * Get Random int Between the given range. Inclusive.
 * @param {number} min - minimum possible int value.
 * @param {number} max - maximum possible int value.
 * @return {number}
 */
const getRandomIntBetween = (min, max) => {

    min = Math.ceil(min);
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;

};

/**
 * Set Current URL without reloading page
 * @param url - new string url to be set
 */
const setCurrentUrl = function ( url ) {

    history.pushState( 'string', '', url );

};

/**
 * Will check if last number in url is the same as the given parameter, if not then add the parameter to current url.
 * @param whichId - Id to compare with current url
 */
const updateUrlLastId = ( whichId ) => {

    let lastUrlIndexRegex = /\/(?:.(?!\/\d))+$/g;
    let currentUrlIndex = window.location.href.match( lastUrlIndexRegex )[0].replace( '/', '' );

    if (currentUrlIndex !== whichId) {

        setCurrentUrl( window.location.href + '/' + whichId );

    }

};

const isValidCpf = ( whichCpf ) => {

    let cpf = getNumbersFromString( whichCpf );

    if (cpf.length !== 11) {

        return false;

    }

    if (cpf.match( /(\d)\1{10}/g )) {

        return false;

    }

    for (let verificatorPosition = 9; verificatorPosition < 11; verificatorPosition++) {

        let digitSum = 0;
        let currentPosition = 0;

        for (; currentPosition < verificatorPosition; currentPosition++) {

            digitSum += cpf.charAt( currentPosition ) * ( verificatorPosition + 1 - currentPosition );

        }

        digitSum = 10 * digitSum % 11 % 10;

        if (cpf.charAt( currentPosition ) != digitSum) {

            return false;

        }

    }

    return true;

};

const isValidCnpj = ( whichCnpj ) => {

    let cnpj = getNumbersFromString( whichCnpj );

    if (cnpj.length !== 14) {

        return false;

    }

    if (cnpj.match( /(\d)\1{13}/g )) {

        return false;

    }

    for (let verificatorPosition = 12; verificatorPosition <= 13; verificatorPosition++) {

        let digitSum = 0;
        let currentPosition = verificatorPosition - 1;

        for (; currentPosition >= 0; currentPosition--) {

            let digitWeight = verificatorPosition - currentPosition + 1;
            digitWeight = digitWeight > 9 ? digitWeight - 8 : digitWeight;
            digitSum += cnpj.charAt( currentPosition ) * digitWeight;

        }

        digitSum = digitSum % 11;
        let calculatedDigit = digitSum < 2 ? 0 : 11 - digitSum;

        if (cnpj.charAt( verificatorPosition ) != calculatedDigit) {

            return false;

        }

    }

    return true;

};

/**
 * Check wherever the given value is either valid CPF or CNPJ.
 * @param {string|number}whichCpfCnpj
 * @return {boolean}
 */
const isValidCpfCnpj = ( whichCpfCnpj ) => {

    return isValidCpf( whichCpfCnpj ) || isValidCnpj( whichCpfCnpj );

};

const serializeFormToJson = ( whichForm ) => {

    if ( typeof whichForm === 'string'){

        whichForm = document.getElementById( whichForm );

    }

    let formData = new FormData( whichForm );

    return Array.from( formData ).reduce( ( formObject, [ inputName, inputValue], index, formArray ) => {

        let key = inputName.replace( /\]/g, '' ).split( '[' );
        let keyName = key[0];
        let keyIndex = key[1] && parseInt( key[1] );
        let indexAttribute = key[2];

        if( keyIndex != null ){

            createArrayForKey( keyName );
            createObjectForKey(keyName, keyIndex );

            if( indexAttribute ) {

                formObject[keyName][keyIndex][indexAttribute] = inputValue;

            }

        }else {

            formObject[keyName] = inputValue;

        }

        return formObject;

        function createArrayForKey( attName ){

            if( !Array.isArray( formObject[attName] ) ){
                formObject[attName] = [];
            }

        }

        function createObjectForKey( attName, indexKey ){

            if( !formObject[attName][indexKey] ){
                formObject[attName][indexKey] = {};
            }

        }

    }, {} )

};

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

/**
 * Show alert for deletion confirmation and return a pending promise of confirmation result.
 * @param msg {string} Alert window title text.
 * @param options {object} - sweetAlert2 options object to overwrite default settings of the alert.
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 *
 */
const showConfirmDeletionAlert = ( msg, options ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire({
        title: msg,
        text: "Você não será capaz de reverter esta ação!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: `Sim, desejo excluir!`,
        cancelButtonText: 'Cancelar.',
        ...options
    })

};

/**
 * Show alert for deletion confirmation and return a resolved promise if confirm button is selected.
 * @example
 *  showConfirmDeletionAlert( 'Are you sure you want to delete the product?' )
 *    .then( () => {
 *      console.log( 'deletion confirmed, begin deletion...' )
 *      deleteProduct();
 *    } )
 * @param msg {string} - Alert window title text.
 * @param options {object} - SweetAlert2 configurable options object to overwrite default settings of the alert
 * @return {Promise}
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 */
const showConfirmDeletionAlertCallback = ( msg, options ) => {

    return showConfirmDeletionAlert( msg, options )
        .then( ( confirmResult ) => {

            if ( confirmResult.value ){

                return Promise.resolve( true );

            }

        })

};

/**
 * show Default Sweet Alert Error
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window -
 *  default: "Ops!"
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 */
const showErrorAlert = ( msg, options = 'Ops!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: 'error',
        confirmButtonClass: 'btn btn-secondary',
        text: msg,
        ...options
    } )

};

/**
 * Show an alert error for response http status code by his respective property value of given object of statusMsgs
 * @example
 *  showErrorAlertByStatusCode( ajaxErrorResponse, {
 *      400: 'Bad request',
 *      403: 'Forbidden',
 *      404: 'Not found',
 *      500: 'Internal Server Error'
 *  }, 'Unexpected status error' );
 * @param requestResponse {xmlHttpResponse} - Request error response containing http status code.
 * @param statusMsgs {object} - Plain object containing property name as status code numbers and the value as string to be printed in error alert
 * @param defaultMsg {string} - Text to be printed if the requestResponse code is not found in statusMsgs
 */
const showErrorAlertByStatusCode = ( requestResponse, statusMsgs,
                                                defaultMsg = "Falha inesperada na transmissão de dados" ) => {

    const { status } = requestResponse;

    if ( statusMsgs[status] !== undefined ){

        showErrorAlert( statusMsgs[status] );

    }else {

        showErrorAlert( defaultMsg );

    }

};

/**
 * show Default Sweet Alert Success
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window -
 *  default: "Sucesso!"
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 */
const showSuccessAlert = ( msg, options = 'Sucesso!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: "success",
        confirmButtonClass: "btn btn-success",
        text: msg,
        ...options
    } )

};

/**
 * show Default Sweet Alert Warning
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window --
 *  default: "Atenção!"
 */
const showWarningAlert = ( msg, options = 'Atenção!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: "warning",
        confirmButtonClass: "btn btn-success",
        text: msg,
        ...options
    } )

};

/**
 * Create an UI block overlay over the given elements.
 * @param { css-selector|Element} containers - selector or elements to be blocked.
 * @see {@link unblockUiElement}
 */
const blockUiElement = ( ...containers ) => {

    containers.forEach( ( container ) => {

        KTApp.block( container, {
            overlayColor: '#000000',
            type: 'v2',
            state: 'primary',
            message: 'Carregando...',
        } );

    } );

};

/**
 * Create an UI block overlay over the given elements.
 * @param { css-selector|Element} containers - selector or elements to be blocked.
 * @see {@link unblockUiElement}
 */
const blockUiElementSpinner = ( ...containers ) => {

    containers.forEach( ( container ) => {

        KTApp.block( container, {
            overlayColor: '#000000',
            type: 'v2',
            state: 'primary',
        } );

    } );

};

/**
 * Remove the overlay ui blocking of the given elements.
 * @param { css-selector|Element} containers - selector or elements to be released from ui blocking overlay
 * @see {@link blockUiElement}
 */
const unblockUiElement = ( ...containers ) => {

    containers.forEach( ( container ) => {

        KTApp.unblock( container );

    } );

};

export { addLeadingZero, blockUiElement, blockUiElementSpinner, cacheFormData, clearFormValues, formatDate, formatDateToLocalFormat, formatDoubleToCurrency, formatDoubleToPercent, get, getFirstNotNullish, getFormAjaxAttributes, getNumbersFromString, getRandomDoubleBetween, getRandomIntBetween, isNullish, isUndefined, isValidCnpj, isValidCpf, isValidCpfCnpj, maskInputForCurrency, matchIgnoreAccents, normalizeStringWhitespace, parseCurrencyToDouble, parsePercentToDouble, printElement, replaceStringByMap, retriveCachedForm, serializeFormToJson, setCurrentUrl, shortCircuit, showConfirmDeletionAlert, showConfirmDeletionAlertCallback, showErrorAlert, showErrorAlertByStatusCode, showSuccessAlert, showWarningAlert, unblockUiElement, updateUrlLastId };
