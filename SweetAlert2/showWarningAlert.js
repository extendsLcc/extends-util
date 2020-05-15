/**
 * show Default Sweet Alert Warning
 * @param msg {string} - text of alert body message
 * @param options {object|string} A string will change the title header of the alert.
 *  A object will be considered as SweetAlert2 options object to overwrite default settings of the alert window --
 *  default: "Atenção!"
 */
export const showWarningAlert = ( msg, options = 'Atenção!' ) => {

    if ( typeof options === 'string')
        options =  { title: options };

    return swal.fire( {
        type: "warning",
        confirmButtonClass: "btn btn-success",
        text: msg,
        ...options
    } )

};
