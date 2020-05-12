import {  } from '../../../../util/src/string/format/formatDoubleToPercent.js';
import { parseCurrencyToDouble } from '../../../../util/src/number/parse/parseCurrencyToDouble.js';
import { parsePercentToDouble } from '../../../../util/src/number/parse/parsePercentToDouble.js';

describe( 'Parse percent string value to double', () => {

    it( 'should parse the double value contained in the percent string', () => {

        expect( parsePercentToDouble( '1.234.567,89%' ) ).toBe( 1234567.89 );
        expect( parsePercentToDouble( '-1.234.567,89' ) ).toBe( -1234567.89 );
        expect( parsePercentToDouble( '-0,09' ) ).toBe( -0.09 );
        expect( parsePercentToDouble( '0' ) ).toBe( 0.0 );

    } );

    it( 'should return NaN if de string cannot be parsed', function () {

        expect( parsePercentToDouble( 'one hundred and twenty-three %' ) ).toBe( NaN );

    } );

} );