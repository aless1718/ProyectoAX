export class Register{

    public fecha: Date;
    public peso: number;
    public cintura: number;
    public torso: number;
    public hombros: number;
    public pierna: number;
    public brazo: number;
    public user_id: string;
    public _id?: string;


    constructor( user_id: string, fecha: Date, peso: number, cintura: number, torso: number, hombros: number, pierna: number, brazo: number )
    {
        this.user_id = user_id;
        this.fecha = fecha;
        this.peso = peso;
        this.brazo = brazo;
        this.pierna = pierna;
        this.hombros = hombros;
        this.cintura = cintura;
        this.torso = torso;
    }
}