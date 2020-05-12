import { parseCurrencyToDouble } from '../../../../util/src/number/parse/parseCurrencyToDouble.js';

describe( 'Parse currency string value to double', () => {

    it( 'should parse the double value contained in the currency string', () => {

        expect( parseCurrencyToDouble( 'R$ 1.234.567,89' ) ).toBe( 1234567.89 );
        expect( parseCurrencyToDouble( '-R$ 1.234.567,89' ) ).toBe( -1234567.89 );

    } );

    it( 'should return NaN if de string cannot be parsed', function () {

        expect( parseCurrencyToDouble( 'R$ one hundred and twenty-three' ) ).toBe( NaN );

    } );

} );