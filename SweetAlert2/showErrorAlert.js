/**
 * show Default Sweet Alert Error
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window -
 *  default: "Ops!"
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 */
export const showErrorAlert = ( msg, options = 'Ops!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: 'error',
        confirmButtonClass: 'btn btn-secondary',
        text: msg,
        ...options
    } )

};
