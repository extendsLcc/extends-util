//! API
// for bundling purpose

//  LOGIC
export { isNullish } from './src/logic/isNullish';
export { isUndefined } from './src/logic/isUndefined';
export { getFirstNotNullish, shortCircuit, get } from './src/logic/getFirstNotNullish';

//  STRING
export { getNumbersFromString } from  './src/string/getNumbersFromString'
    //  MANIPULATE
export { addLeadingZero } from './src/string/manipulate/addLeadingZero';
export { normalizeStringWhitespace } from './src/string/manipulate/normalizeStringWhitespace';
export { replaceStringByMap } from './src/string/manipulate/replaceStringByMap';
    //  FORMAT
export { formatDateToLocalFormat, formatDate } from './src/string/format/formatDateToLocalFormat';
export { formatDoubleToCurrency } from './src/string/format/formatDoubleToCurrency';
export { formatDoubleToPercent } from './src/string/format/formatDoubleToPercent';

//  NUMBER
    //  PARSE
export { parseCurrencyToDouble } from './src/number/parse/parseCurrencyToDouble';
export { parsePercentToDouble } from './src/number/parse/parsePercentToDouble'
    //  RANDOM
export { getRandomDoubleBetween } from './src/number/random/getRandomDoubleBetween'
export { getRandomIntBetween } from './src/number/random/getRandomIntBetween'

//  URL
export { setCurrentUrl } from  './src/url/setCurrentUrl'
export { updateUrlLastId } from './src/url/updateUrlLastId'

//  VALIDATION
export { isValidCpf } from './src/validation/isValidCpf'
export { isValidCnpj } from './src/validation/isValidCnpj'
export { isValidCpfCnpj } from './src/validation/isValidCpfCnpj'