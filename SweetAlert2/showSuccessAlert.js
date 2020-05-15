/**
 * show Default Sweet Alert Success
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window -
 *  default: "Sucesso!"
 * @see {@link https://sweetalert2.github.io/#configuration| SweetAlert2 Options }
 */
export const showSuccessAlert = ( msg, options = 'Sucesso!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: "success",
        confirmButtonClass: "btn btn-success",
        text: msg,
        ...options
    } )

};
