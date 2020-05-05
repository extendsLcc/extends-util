const retriveCachedForm = ( whichForm ) => {

    whichForm.data( 'form-cache' ).forEach( ( cachedInput ) => {
        whichForm.find( `[name=${ cachedInput['name'] }]` ).val( cachedInput['value'] ).trigger( 'change' );
    } );

};