import { setCurrentUrl } from './setCurrentUrl.js';

/**
 * Will check if last number in url is the same as the given parameter, if not then add the parameter to current url.
 * @param whichId - Id to compare with current url
 */
export const updateUrlLastId = ( whichId ) => {

    let lastUrlIndexRegex = /\/(?:.(?!\/\d))+$/g;
    let currentUrlIndex = window.location.href.match( lastUrlIndexRegex )[0].replace( '/', '' );

    if (currentUrlIndex !== whichId) {

        setCurrentUrl( window.location.href + '/' + whichId );

    }

};