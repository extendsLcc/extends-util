import { showErrorAlert } from './showErrorAlert.js';

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
export const showErrorAlertByStatusCode = ( requestResponse, statusMsgs,
                                                defaultMsg = "Falha inesperada na transmissão de dados" ) => {

    const { status } = requestResponse;

    if ( statusMsgs[status] !== undefined ){

        showErrorAlert( statusMsgs[status] );

    }else{

        showErrorAlert( defaultMsg );

    }

};
