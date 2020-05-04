import { getRandomDoubleBetween } from '../../../../util/src/number/random/getRandomDoubleBetween.js';

describe( 'Generate Random Double Value Between two given parameters', () => {

    it( 'should generate a random double between the given arguments', () =>
    {
        const randomDouble = getRandomDoubleBetween( -10, 10 );

        expect( randomDouble ).toBeGreaterThanOrEqual( -10 );
        expect( randomDouble ).toBeLessThanOrEqual( 10 );

    } );

} );