// vlastník
// index
// hozeny
// id token-index-vlastnik.id
export class token {
    constructor( index,vlastnik ) {
        this.index = index;
        this.vlastnik = vlastnik;
        this.hozeny = hozeny;
        this.id = `token-${ index }-${ vlastnik.id }`;

    }
}