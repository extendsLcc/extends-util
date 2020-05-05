/**
 * Create an UI block overlay over the given elements.
 * @param { css-selector|Element} containers - selector or elements to be blocked.
 * @see {@link unblockUiElement}
 */
const blockUiElement = ( ...containers ) => {

    containers.forEach( ( container ) => {

        KTApp.block( container, {
            overlayColor: '#000000',
            type: 'v2',
            state: 'primary',
            message: 'Carregando...',
        } );

    } );

};