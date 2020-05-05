const percentNumberFormat = Intl.NumberFormat( 'pt-BR', { style: 'percent', maximumFractionDigits: 2 } );

/**
 * Format decimal number to percent string format.
 * @param {number} whichDouble - decimal number to be formatted.
 * @param defaultValue - default value to return if {@link whichDouble} is Not a Number. Default: '0%'
 * @return {string}
 */
export const formatDoubleToPercent = ( whichDouble, defaultValue = '0%' ) => {

    return isNaN( whichDouble ) ? defaultValue : percentNumberFormat.format( whichDouble / 100 );

};