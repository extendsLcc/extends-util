/**
 * Show alert for deletion confirmation and return a pending promise of confirmation result.
 * @param msg {string} Alert window title text.
 * @param options {object} - sweetAlert2 options object to overwrite default settings of the alert.
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 *
 */
export const showConfirmDeletionAlert = ( msg, options ) => {

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
export const showConfirmDeletionAlertCallback = ( msg, options ) => {

    return showConfirmDeletionAlert( msg, options )
        .then( ( confirmResult ) => {

            if ( confirmResult.value ){

                return Promise.resolve( true );

            }

        })

};
