import { getRandomIntBetween } from '../../../../util/src/number/random/getRandomIntBetween.js';

describe( 'Generate Random Int Value Between two given parameters', () => {

    it( 'should generate a random int between the given arguments', () => {

        const randomDouble = getRandomIntBetween( -10, 10 );

        expect( Number.isInteger( randomDouble ) ).toBeTruthy();
        expect( randomDouble ).toBeGreaterThanOrEqual( -10 );
        expect( randomDouble ).toBeLessThanOrEqual( 10 );

    } );

} );