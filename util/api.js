//! API
// for bundling purpose

//  LOGIC
export { isNullish } from './src/logic/isNullish.js';
export { isUndefined } from './src/logic/isUndefined.js';
export { getFirstNotNullish, shortCircuit, get } from './src/logic/getFirstNotNullish.js';

//  STRING
export { getNumbersFromString } from './src/string/getNumbersFromString.js';
export { matchIgnoreAccents } from './src/string/matchIgnoreAccents.js'
    //  MANIPULATE
export { addLeadingZero } from './src/string/manipulate/addLeadingZero.js';
export { normalizeStringWhitespace } from './src/string/manipulate/normalizeStringWhitespace.js';
export { replaceStringByMap } from './src/string/manipulate/replaceStringByMap.js';
    //  FORMAT
export { formatDateToLocalFormat, formatDate } from './src/string/format/formatDateToLocalFormat.js';
export { formatDoubleToCurrency } from './src/string/format/formatDoubleToCurrency.js';
export { formatDoubleToPercent } from './src/string/format/formatDoubleToPercent.js';

//  NUMBER
    //  PARSE
export { parseCurrencyToDouble } from './src/number/parse/parseCurrencyToDouble.js';
export { parsePercentToDouble } from './src/number/parse/parsePercentToDouble.js';
    //  RANDOM
export { getRandomDoubleBetween } from './src/number/random/getRandomDoubleBetween.js';
export { getRandomIntBetween } from './src/number/random/getRandomIntBetween.js';

//  URL
export { setCurrentUrl } from './src/url/setCurrentUrl.js';
export { updateUrlLastId } from './src/url/updateUrlLastId.js';

//  VALIDATION
export { isValidCpf } from './src/validation/isValidCpf.js';
export { isValidCnpj } from './src/validation/isValidCnpj.js';
export { isValidCpfCnpj } from './src/validation/isValidCpfCnpj.js';

// FORM
export { serializeFormToJson } from './src/form/serializeFormToJson.js';
