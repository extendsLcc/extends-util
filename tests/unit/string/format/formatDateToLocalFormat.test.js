import { formatDateToLocalFormat } from '../../../../util/src/string/format/formatDateToLocalFormat.js';
import { addLeadingZero } from '../../../../util/src/string/manipulate/addLeadingZero.js';

describe( 'Format Date to Local DateFormat', () => {

    it( 'should format a string database date to local date format', () => {

        let date = new Date(),
            year = addLeadingZero( date.getFullYear(), 4 ),
            month = addLeadingZero( date.getMonth(), 2 ),
            day = addLeadingZero( date.getDay(), 2 );

        expect( formatDateToLocalFormat( `${year}-${month}-${day}` ) ).toBe( `${day}/${month}/${year}` );

    } );

} );