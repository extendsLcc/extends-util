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

export { showConfirmDeletionAlert, showConfirmDeletionAlertCallback, showErrorAlert, showErrorAlertByStatusCode, showSuccessAlert, showWarningAlert };
