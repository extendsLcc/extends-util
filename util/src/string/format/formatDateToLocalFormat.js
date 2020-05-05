const localDateFormat = Intl.DateTimeFormat( 'pt-BR' );
/**
 * Format date string in format YYYY-MM-DD to DD/MM/YYYY
 * @param {string} whichDate - Date in format YYYY-MM-DD to be formatted
 * @returns {string} - Date string in the format DD/MM/YYYY
 */
export const formatDateToLocalFormat = ( whichDate ) => localDateFormat.format( new Date(`${whichDate} 00:00` ) );

export const formatDate = formatDateToLocalFormat;