import { isUndefined } from '../../../util/src/logic/isUndefined.js';

describe( 'Check if value is undefined', () => {

    it( 'should return "true" if value is undefined', () => {

        // falsy Values
        let undefinedValue;

        let objectValue = {};

        expect( isUndefined( undefinedValue ) ).toBeTruthy();
        expect( isUndefined( objectValue.undeclaredProperty ) ).toBeTruthy();
        expect( isUndefined( objectValue['undeclaredProperty'] ) ).toBeTruthy();

    });

    it( 'should return "false" if value is not undefined', () => {

        // falsy Values
        let nullValue = null,
            zeroValue = 0,
            emptyStringValue = '',
            naNValue = NaN;

        // truthy Values
        let trueValue = true,
            objectValue = {},
            arrayValue = [],
            functionValue = ()=>{},
            numberValue = 1,
            stringValue = 'string';

        expect( isUndefined( nullValue ) ).toBeFalsy();
        expect( isUndefined( zeroValue ) ).toBeFalsy();
        expect( isUndefined( emptyStringValue ) ).toBeFalsy();
        expect( isUndefined( naNValue ) ).toBeFalsy();

        expect( isUndefined( trueValue ) ).toBeFalsy();
        expect( isUndefined( objectValue ) ).toBeFalsy();
        expect( isUndefined( arrayValue ) ).toBeFalsy();
        expect( isUndefined( functionValue ) ).toBeFalsy();
        expect( isUndefined( numberValue ) ).toBeFalsy();
        expect( isUndefined( stringValue ) ).toBeFalsy();

    } );

} );