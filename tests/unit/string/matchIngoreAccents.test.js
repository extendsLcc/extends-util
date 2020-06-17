

describe( 'Check if two strings contain matching text ignoring accents', function () {

    it('should return true if strings are matching', function () {

        expect( matchIgnoreAccents( 'normal string', 'normal string' ) ) .toBeTruthy();
        expect( matchIgnoreAccents( '' , '' ) ) .toBeTruthy();
        expect( matchIgnoreAccents( 'singleWord', 'singleWord' ) ) .toBeTruthy();

    });

    it('should return true if strings are matching ignoring accents', function () {

        expect( matchIgnoreAccents( 'áàãâ', 'aaaa' ) ).toBeTruthy();
        expect( matchIgnoreAccents( 'ü words ê ẽ é è', 'u words e e e e' ) ).toBeTruthy();

    });

    it('should not ignore letters case', function () {

        expect( matchIgnoreAccents( 'íÌĩÎ', 'iIiI' ) ).toBeTruthy();
        expect( matchIgnoreAccents( 'íÌĩÎ', 'iiii' ) ).toBeFalsy();

    });

})