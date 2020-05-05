const currencyNumberFormat = Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } );

/**
 * Format decimal number to BRL currency string format.
 * @param {number} whichDouble - decimal number to be formatted.
 * @param defaultValue - default value to return if {@link whichDouble} is Not a Number. Default: 'NaN'
 * @return {string}
 */
export const formatDoubleToCurrency = ( whichDouble, defaultValue = 'NaN' ) => {

    return isNaN( whichDouble ) ? defaultValue : currencyNumberFormat.format( whichDouble );

};