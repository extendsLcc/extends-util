/**
 * Copy entire dom structure inside given element and print it in another page
 * @param whichElement
 */
export const printElement = ( whichElement ) => {

    let cloneDom = $( whichElement ).clone();

    let printWindow = window.open( '', '_blank', '' );
    printWindow.document.close();
    $( printWindow.document.body ).append( cloneDom );
    $( printWindow.document.head ).append( $( 'link[href$=".css"]' ).add( 'style' ).clone() );

    $( printWindow ).ready( function () {

        printWindow.print();
        printWindow.close();

    } )

};