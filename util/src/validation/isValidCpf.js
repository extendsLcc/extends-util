import { getNumbersFromString } from '../string/getNumbersFromString.js';

export const isValidCpf = ( whichCpf ) => {

    let cpf = getNumbersFromString( whichCpf );

    if (cpf.length !== 11) {

        return false;

    }

    if (cpf.match( /(\d)\1{10}/g )) {

        return false;

    }

    for (let verificatorPosition = 9; verificatorPosition < 11; verificatorPosition++) {

        let digitSum = 0;
        let currentPosition = 0;

        for (; currentPosition < verificatorPosition; currentPosition++) {

            digitSum += cpf.charAt( currentPosition ) * ( verificatorPosition + 1 - currentPosition );

        }

        digitSum = 10 * digitSum % 11 % 10;

        if (cpf.charAt( currentPosition ) != digitSum) {

            return false;

        }

    }

    return true;

};