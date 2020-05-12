export const serializeFormToJson = ( whichForm ) => {

    if ( typeof whichForm === 'string'){

        whichForm = document.getElementById( whichForm );

    }

    let formData = new FormData( whichForm );

    return Array.from( formData ).reduce( ( formObject, [ inputName, inputValue], index, formArray ) => {

        let key = inputName.replace( /\]/g, '' ).split( '[' );
        let keyName = key[0];
        let keyIndex = key[1] && parseInt( key[1] );
        let indexAttribute = key[2];

        if( keyIndex != null ){

            createArrayForKey( keyName );
            createObjectForKey(keyName, keyIndex );

            if( indexAttribute ) {

                formObject[keyName][keyIndex][indexAttribute] = inputValue;

            }

        }else{

            formObject[keyName] = inputValue;

        }

        return formObject;

        function createArrayForKey( attName ){

            if( !Array.isArray( formObject[attName] ) ){
                formObject[attName] = [];
            }

        }

        function createObjectForKey( attName, indexKey ){

            if( !formObject[attName][indexKey] ){
                formObject[attName][indexKey] = {};
            }

        }

    }, {} )

};