export class Rutina{
    
   public fecha: Date;
   public musculos: [];
   public tipoRutina: [];
   public material: string;
   public nivel: number;
   public duracion: number;
   public nroejers: number;
   public series: number;
   public repes: number;
   public descripcion: string;
   public user_id: string;
   public _id?: string;

   constructor( user_id: string, fecha: Date, nivel: number, duracion: number, nroejers: number, series: number, repes: number, musculos: [], tipoRutina: [], descripcion:string, material: string )
   {
       this.user_id = user_id;
       this.fecha = fecha;
       this.nivel = nivel;
       this.duracion = duracion;
       this.nroejers = nroejers;
       this.series = series;
       this.repes = repes;
       this.musculos = musculos;
       this.tipoRutina = tipoRutina;
       this.descripcion = descripcion;
       this.material = material;


   }
}

// jgonzalezf@ausiasmarch.net