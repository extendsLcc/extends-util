import { normalizeStringWhitespace } from '../../../../util/src/string/manipulate/normalizeStringWhitespace.js';

describe( 'Removes all internal string whitespaces', () => {

    it( 'should remove all multiple spaces in between words in the string and also removes leading and trailing whitespace.', () => {

        expect( normalizeStringWhitespace( '  removes   all     excess    whitespace  ' ) ).toBe( 'removes all excess whitespace' );

    } );

    it( 'should remove tabs space', () => {

        expect( normalizeStringWhitespace( 'removes \ttabs \tto' ) ).toBe( 'removes tabs to' );

    } );

    it( 'should remove linebreaks', () => {

        expect( normalizeStringWhitespace( ' and \nline\nbreaks \n' ) ).toBe( 'and line breaks' );

    } );

} );