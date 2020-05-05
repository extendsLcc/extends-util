import { isValidCpfCnpj } from '../../../util/src/validation/isValidCpfCnpj.js';

describe( 'Check if the given digits are a either valid CPF or valid CNPJ.', () => {

    const TEST_CNPJ_NUMBER = 58087471000169;
    const TEST_CNPJ_STRING = TEST_CNPJ_NUMBER.toString();
    const TEST_FORMATTED_CNPJ = '82.791.313/0001-70';

    const TEST_CPF_NUMBER = 27418785011;
    const TEST_CPF_STRING = TEST_CPF_NUMBER.toString();
    const TEST_FORMATTED_CPF = '274.187.850-11';

    it( 'should return true if valid either valid cpf or cnpj', () => {

        expect( isValidCpfCnpj( TEST_CPF_NUMBER ) ).toBeTruthy();
        expect( isValidCpfCnpj( TEST_CNPJ_NUMBER ) ).toBeTruthy();
        
        expect( isValidCpfCnpj( TEST_CPF_STRING ) ).toBeTruthy();
        expect( isValidCpfCnpj( TEST_CNPJ_STRING ) ).toBeTruthy();
        
        expect( isValidCpfCnpj( TEST_FORMATTED_CPF ) ).toBeTruthy();
        expect( isValidCpfCnpj( TEST_FORMATTED_CNPJ ) ).toBeTruthy();

    } );

    it( 'should return false if is not valid cpf or cnpj', function () {

        expect( isValidCpfCnpj( '00000000000000' ) ).toBeFalsy();
        expect( isValidCpfCnpj( TEST_CNPJ_STRING.substring( 0, 10 ) ) ).toBeFalsy();
        expect( isValidCpfCnpj( `${TEST_CNPJ_NUMBER-1}` ) ).toBeFalsy();
        expect( isValidCpfCnpj( `${TEST_CNPJ_NUMBER-10}` ) ).toBeFalsy();

        expect( isValidCpfCnpj( '11111111111' ) ).toBeFalsy();
        expect( isValidCpfCnpj( TEST_CPF_STRING.substring( 0, 10 ) ) ).toBeFalsy();
        expect( isValidCpfCnpj( `${TEST_CPF_NUMBER-1}` ) ).toBeFalsy();
        expect( isValidCpfCnpj( `${TEST_CPF_NUMBER-10}` ) ).toBeFalsy();

    } );

} );