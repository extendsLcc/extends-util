import { getNumbersFromString } from '../string/getNumbersFromString.js';

export const isValidCnpj = ( whichCnpj ) => {

    let cnpj = getNumbersFromString( whichCnpj );

    if (cnpj.length !== 14) {

        return false;

    }

    if (cnpj.match( /(\d)\1{13}/g )) {

        return false;

    }

    for (let verificatorPosition = 12; verificatorPosition <= 13; verificatorPosition++) {

        let digitSum = 0;
        let currentPosition = verificatorPosition - 1

        for (; currentPosition >= 0; currentPosition--) {

            let digitWeight = verificatorPosition - currentPosition + 1;
            digitWeight = digitWeight > 9 ? digitWeight - 8 : digitWeight;
            digitSum += cnpj.charAt( currentPosition ) * digitWeight;

        }

        digitSum = digitSum % 11;
        let calculatedDigit = digitSum < 2 ? 0 : 11 - digitSum;

        if (cnpj.charAt( verificatorPosition ) != calculatedDigit) {

            return false;

        }

    }

    return true;

};