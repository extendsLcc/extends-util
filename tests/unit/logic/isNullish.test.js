import { isNullish } from '../../../util/src/logic/isNullish.js';


describe( 'Check if value is nullish', () => {

    it( 'should return "true" for nullish values', () => {

        // nullish values
        let undefinedValue,
            nullValue = null;

        let objectValue = {};

        expect( isNullish( undefinedValue ) ).toBeTruthy();
        expect( isNullish( objectValue.undeclaredProperty ) ).toBeTruthy();
        expect( isNullish( objectValue['undeclaredProperty'] ) ).toBeTruthy();
        expect( isNullish( nullValue ) ).toBeTruthy();

    } );

    it( 'should return "false" if not nullish value.', () => {

        // falsy Values
        let zeroValue = 0,
            emptyStringValue = '',
            naNValue = NaN;

        // truthy Values
        let trueValue = true,
            objectValue = {},
            arrayValue = [],
            functionValue = () => {
            },
            numberValue = 1,
            stringValue = 'string';

        expect( isNullish( zeroValue ) ).toBeFalsy();
        expect( isNullish( emptyStringValue ) ).toBeFalsy();
        expect( isNullish( naNValue ) ).toBeFalsy();

        expect( isNullish( trueValue ) ).toBeFalsy();
        expect( isNullish( objectValue ) ).toBeFalsy();
        expect( isNullish( arrayValue ) ).toBeFalsy();
        expect( isNullish( functionValue ) ).toBeFalsy();
        expect( isNullish( numberValue ) ).toBeFalsy();
        expect( isNullish( stringValue ) ).toBeFalsy();

    } );
} );