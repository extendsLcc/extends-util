function stripStringAccents( whichString ) {

    return whichString.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' )

}

export const matchIgnoreAccents = ( firstString, secondString ) => {

    return stripStringAccents( firstString ) === stripStringAccents( secondString );

};