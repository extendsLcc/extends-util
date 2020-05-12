import { serializeFormToJson } from '../../../util/src/form/serializeFormToJson.js';

describe( 'Serialize formData to Javascript Object by input names', function () {

    it( 'should create js object using name of the input as property keys', function () {

        document.body.innerHTML = `
        <form id="form">
            <input type="text" name="user" >
            <input type="text" name="password" >
        </form>
        `;

        const formObject = serializeFormToJson( 'form' );

        expect( formObject.hasOwnProperty( 'user' ) ).toBeTruthy();
        expect( formObject.hasOwnProperty( 'password' ) ).toBeTruthy();

    } );

    it( 'should create js object using input name as object property and input value as property value', function () {

        document.body.innerHTML = `
        <form id="form">
            <input type="text" name="user" value="user@mail.com">
            <input type="text" name="password" value="123456">
        </form>
        `;

        const formObject = serializeFormToJson( 'form' );

        expect( formObject.user ).toBe( 'user@mail.com' );
        expect( formObject.password ).toBe( '123456' );

    } );

    it( 'should consider inputs with array names, as js arrays when deserialize', function () {

        document.body.innerHTML = `
        <form id="form">
            <input type="text" name="user" value="user@mail.com">
            <input type="text" name="password" value="123456">
            <hr>
            <input type="text" name="product[0][id]" value="1">
            <input type="text" name="product[0][name]" value="product X">
            <input type="text" name="product[0][value]" value="10.00">
            <input type="text" name="product[0][description]" value="X's description">
            <hr>
            </div>
            <input type="text" name="product[1][id]" value="2">
            <input type="text" name="product[1][name]" value="product Y">
            <input type="text" name="product[1][value]" value="20.00">
            <input type="text" name="product[1][description]" value="Y's description">
            <hr>
            </div>
            <input type="text" name="product[2][id]" value="3">
            <input type="text" name="product[2][name]" value="product Z">
            <input type="text" name="product[2][value]" value="30.00">
            <input type="text" name="product[2][description]" value="Z's description">
        </form>
        `;

        const formObject = serializeFormToJson( 'form' );

        const letter = [ 'X', 'Y', 'Z' ];

        // default values still should be deserialized normally
        expect( formObject.user ).toBe( 'user@mail.com' );
        expect( formObject.password ).toBe( '123456' );

        // array forms should become arrays
        expect( Array.isArray( formObject.product ) ).toBeTruthy();

        for (let index = 0; index < 3; index++) {

            expect( formObject.product[index].id ).toBe( `${index + 1}` );
            expect( formObject.product[index].name ).toBe( `product ${letter[index]}` );
            expect( formObject.product[index].value ).toBe( `${index + 1}0.00` );
            expect( formObject.product[index].description ).toBe( `${letter[index]}'s description` );

        }

    } );

    it( 'should accept DOM element as argument too, instead of form id name', function () {

        document.body.innerHTML = `
        <form id="form">
            <input type="text" name="user" value="user@mail.com">
            <input type="text" name="password" value="123456">
        </form>
        `;

        const formObjectResults = [
            serializeFormToJson( document.getElementById('form' ) ),
            serializeFormToJson( document.querySelector( '#form' ) ),
        ];

        for ( let formObject of formObjectResults ){

            expect( formObject.user ).toBe( 'user@mail.com' );
            expect( formObject.password ).toBe( '123456' );

        }

    } );

} );