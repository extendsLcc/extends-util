import { isValidCpf } from '../../../util/src/validation/isValidCpf.js';

describe( 'Check if the given digits is a valid CPF', () => {

    const TEST_CPF_NUMBER = 27418785011;
    const TEST_CPF_STRING = TEST_CPF_NUMBER.toString();
    const TEST_FORMATTED_CPF = '274.187.850-11';

    it( 'should return true if valid cpf', () => {

        expect( isValidCpf( TEST_CPF_NUMBER ) ).toBeTruthy();
        expect( isValidCpf( TEST_CPF_STRING ) ).toBeTruthy();
        expect( isValidCpf( TEST_FORMATTED_CPF ) ).toBeTruthy();

    } );

    it( 'should return false if invalid cpf', function () {

        expect( isValidCpf( '11111111111' ) ).toBeFalsy();
        expect( isValidCpf( TEST_CPF_STRING.substring( 0, 10 ) ) ).toBeFalsy();
        expect( isValidCpf( `${TEST_CPF_NUMBER-1}` ) ).toBeFalsy();
        expect( isValidCpf( `${TEST_CPF_NUMBER-10}` ) ).toBeFalsy();

    } );

} );