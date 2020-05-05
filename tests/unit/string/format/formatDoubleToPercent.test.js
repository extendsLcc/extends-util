import { formatDoubleToPercent } from '../../../../util/src/string/format/formatDoubleToPercent.js';

describe( 'Format number to percent string format', () => {

    it( 'should format double value to brl currency format', () => {

        expect( formatDoubleToPercent( 1 ) ).toBe( '1%' );
        expect( formatDoubleToPercent( 1000 ) ).toBe( '1.000%' );
        expect( formatDoubleToPercent( -100.23 ) ).toBe( '-100,23%' );
        expect( formatDoubleToPercent( 55.55 ) ).toBe( '55,55%' );

    } );

    it( 'should show decimal cases if they are necessary', function () {

        expect(formatDoubleToPercent( 10.00 )  ).toBe( '10%' );
        expect(formatDoubleToPercent( -1234.01 )  ).toBe( '-1.234,01%' );
        expect(formatDoubleToPercent( .0000000001 )  ).toBe( '0%' );
        expect(formatDoubleToPercent( -.0000000001 )  ).toBe( '-0%' );
        expect(formatDoubleToPercent( 1.00000123456 )  ).toBe( '1%' );

    } );

} );