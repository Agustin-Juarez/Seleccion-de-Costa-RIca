import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";

class selección {
    protected futbolistas: Futbolista[];
    protected entrenador: Entrenador;
    protected masajista: Masajista;

    public constructor(futbolistas: Futbolista[], entrenador: Entrenador, masajista: Masajista){
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajista = masajista;
    }
}

const jugador1 = new Futbolista ("Keylor","Navas",162934,new Date('1986-12-15'),"Arquero");
const jugador2 = new Futbolista ("Joel","Campbell",358491,new Date('1992-06-26'),"Delantero");
const entrenador = new Entrenador ("Luis Fernando","Suarez",374162,new Date('1959-12-23'));
const masajista = new Masajista ("Óscar","Segura",926356,new Date('1972-10-26'));

const costaRica = new selección ([jugador1,jugador2], entrenador, masajista)
console.log(costaRica);
