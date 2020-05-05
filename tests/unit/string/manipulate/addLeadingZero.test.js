import { addLeadingZero } from '../../../../util/src/string/manipulate/addLeadingZero.js';

describe( 'Add leading zeros do string util string lengths reaches specified size', () => {

    it( 'should add leading zeros ta a string to match specified size ', function () {

        expect( addLeadingZero( '01', 4 ) ).toBe( '0001' );
        expect( addLeadingZero( 'string', 10 ) ).toBe( '0000string' );
        expect( addLeadingZero( 0.99, 6 ) ).toBe( '000.99' );

    } );

    it( 'should not change the string if it already has length greater or equal to the final size', function () {

        let valueTest;

        valueTest = 10;
        expect( addLeadingZero( valueTest, 2 ) ).toBe( String( valueTest ) );
        valueTest = 'string';
        expect( addLeadingZero( valueTest, 1 ) ).toBe( valueTest );

    } );

} );