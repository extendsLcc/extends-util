import { replaceStringByMap } from '../../../../util/src/string/manipulate/replaceStringByMap.js';

describe( 'Replace string characters matching the given pattern', () => {

    it( 'should replace string characters matching the given pattern by the value of matched character in the given replaceMap', () => {

        expect( replaceStringByMap( '1.000,00', /[.,]/g,
            { '.': 'dot', ',': 'comma' } ) ).toBe( '1dot000comma00' );
        expect( replaceStringByMap( '157293', /[\d]/g,
            { '1': 'one', '2': 'two', '3': 'three' } ) ).toBe( 'one57two9three' );

    } );

    it( 'should replace string characters matching the given pattern by the defaultValue if the match is not found in replaceMap', function () {

        expect( replaceStringByMap( 'R$ -1.234,56', /[\D,.-]/g,
            { '.': '', ',': '.', '-': '-' } , '' ) ).toBe( '-1234.56' );

    } );

    it( 'should not replace matched characters if not they are not found in replaceMap and not defaultValue is declared', function () {

        const string = 'abc123.,;@#';
        expect( replaceStringByMap( string, /./g,{ 'def456': '' } ) ).toBe( string );

    } );

} );