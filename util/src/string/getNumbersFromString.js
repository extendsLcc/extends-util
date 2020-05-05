export const getNumbersFromString = ( whichString ) => {

    return String( whichString ).replace( /\D/g, '' );

};