
/**
 * Remove the overlay ui blocking of the given elements.
 * @param { css-selector|Element} containers - selector or elements to be released from ui blocking overlay
 * @see {@link blockUiElement}
 */
export const unblockUiElement = ( ...containers ) => {

    containers.forEach( ( container ) => {

        KTApp.unblock( container );

    } );

};