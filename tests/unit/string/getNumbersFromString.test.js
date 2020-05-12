import { getNumbersFromString } from '../../../util/src/string/getNumbersFromString.js';

describe( 'Extract numeric values from given string', function () {

    it( 'should return only numeric values in the given string', function () {

        const textTest1 = 'Lorem 1 ipsum sit 2 amet, 3consectetur. Nam 4sit amet ipsum va5rius, malesuada.';
        const textTest2 = 'Lorem ip123sum dolor sit amet, consect45etur adipiscin6g eli7t8.9';

        expect( getNumbersFromString( textTest1 ) ).toBe( '12345' );
        expect( getNumbersFromString( textTest2 ) ).toBe( '123456789' );

    } );

    it( 'should return empty string it not numeric value is found', function () {

        const textTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet ipsum varius,';

        expect( getNumbersFromString( textTest ) ).toBe( '' );

    } );

    it( 'should not return negative or decimal symbol', function () {

        const textTest1 = '1.000.000,00';
        const textTest2 = '1.50';
        const textTest3 = '-1';

        expect( getNumbersFromString( textTest1 ) ).toBe( '100000000' );
        expect( getNumbersFromString( textTest2 ) ).toBe( '150' );
        expect( getNumbersFromString( textTest3 ) ).toBe( '1' );


    } );

} );