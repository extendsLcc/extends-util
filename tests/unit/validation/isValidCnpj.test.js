import { isValidCnpj} from '../../../util/src/validation/isValidCnpj.js';

describe( 'Check if the given digits is a valid CNPJ', () => {

    const TEST_CNPJ_NUMBER = 58087471000169;
    const TEST_CNPJ_STRING = TEST_CNPJ_NUMBER.toString();
    const TEST_FORMATTED_CNPJ = '82.791.313/0001-70';

    it( 'should return true if valid cnpj', () => {

        expect( isValidCnpj( TEST_CNPJ_STRING ) ).toBeTruthy();
        expect( isValidCnpj( TEST_FORMATTED_CNPJ ) ).toBeTruthy();
        expect( isValidCnpj( TEST_CNPJ_NUMBER ) ).toBeTruthy();

    } );

    it( 'should return false if invalid cnpj', function () {

        expect( isValidCnpj( '00000000000000' ) ).toBeFalsy();
        expect( isValidCnpj( TEST_CNPJ_STRING.substring( 0, 10 ) ) ).toBeFalsy();
        expect( isValidCnpj( `${TEST_CNPJ_NUMBER-1}` ) ).toBeFalsy();
        expect( isValidCnpj( `${TEST_CNPJ_NUMBER-10}` ) ).toBeFalsy();

    } );

} );