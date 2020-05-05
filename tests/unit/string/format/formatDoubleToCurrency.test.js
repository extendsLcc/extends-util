import { formatDoubleToCurrency } from '../../../../util/src/string/format/formatDoubleToCurrency.js';

describe( 'Format number to BRL currency string format', () => {
    
    it( 'should format double value to brl currency format', () => {
        // const currencyValue = formatDoubleToCurrency( 1234567.89 );

        expect( formatDoubleToCurrency( 1234567.89 ) ).toBe( 'R$ 1.234.567,89' );
        expect( formatDoubleToCurrency( -1234567.89 ) ).toBe( '-R$ 1.234.567,89' );

    } );

} );