import { getFirstNotNullish } from '../../../util/src/logic/getFirstNotNullish.js';

describe( 'Return the first given parameter that is not nullish', () => {

    it( 'should return the first not nullish argument', () => {

        let nullValue = null,
            undefinedValue,
            zeroValue = 0,
            emptyStringValue = '',
            naNVale = NaN,
            stringValue = 'string',
            numberValue = 1,
            objectValue = {},
            arrayValue = [],
            functionValue = () => {
            };

        expect( getFirstNotNullish( nullValue, undefinedValue, zeroValue ) ).toBe( zeroValue );
        expect( getFirstNotNullish( undefinedValue, nullValue, emptyStringValue ) ).toBe( emptyStringValue );
        expect( getFirstNotNullish( objectValue.undeclaredPropety, nullValue, naNVale, zeroValue ) ).toBe( naNVale );
        expect( getFirstNotNullish( undefinedValue, nullValue, numberValue ) ).toBe( numberValue );
        expect( getFirstNotNullish( undefinedValue, stringValue ) ).toBe( stringValue );
        expect( getFirstNotNullish( undefinedValue, objectValue ) ).toBe( objectValue );
        expect( getFirstNotNullish( undefinedValue, arrayValue ) ).toBe( arrayValue );
        expect( getFirstNotNullish( undefinedValue, functionValue ) ).toBe( functionValue );


    } );

    it( 'should return "null" if all arguments are nullish', function () {

        let nullValue = null,
            undefinedValue,
            objectValue = {};

        expect( getFirstNotNullish( undefinedValue, nullValue, objectValue.undeclaredPropety, objectValue['undeclaredPropety'] ) ).toBeFalsy();

    } );

} );