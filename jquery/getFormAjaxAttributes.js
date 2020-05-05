/**
 * Get ajax params from a form method, action and input values inside the form.
 * @param {jQuery} whichForm - Which form to extract the ajax attributes.
 * @return {{data: *, type: *, url: *}}
 */
export const getFormAjaxAttributes = ( whichForm ) => {

    return {
        type: whichForm.attr( 'method' ),
        url: whichForm.attr( 'action' ),
        data: whichForm.serializeArray()
    }

};