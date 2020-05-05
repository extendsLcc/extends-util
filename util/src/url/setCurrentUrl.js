/**
 * Set Current URL without reloading page
 * @param url - new string url to be set
 */
export const setCurrentUrl = function ( url ) {

    history.pushState( 'string', '', url );

};