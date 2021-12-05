// vytvořit třídu hráč
//id (string)
//barva(string)
// jesli je aktivní (boolean)
// žetony (pole) 
import { token } from "./token.js"; 
//name export
//default export
const POCET_TOKEN = 21;

export class player {
    constructor( name, id, color, active = false ) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.token = this.vytvorToken;
    }
    vytvorToken(num){
        const token = []
        for (let i = 0; i < pocet; i+= 1) {
            const token = new token(i, this);
            token.push(token);
        }
        return token;
    }
}
