import { isValidCpf } from './isValidCpf.js';
import { isValidCnpj } from './isValidCnpj.js';

/**
 * Check wherever the given value is either valid CPF or CNPJ.
 * @param {string|number}whichCpfCnpj
 * @return {boolean}
 */
export const isValidCpfCnpj = ( whichCpfCnpj ) => {

    return isValidCpf( whichCpfCnpj ) || isValidCnpj( whichCpfCnpj );

};