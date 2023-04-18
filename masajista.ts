import { Empleado } from "./empleado";

export class Masajista extends Empleado {
    
    constructor(nombre: string, apellido: string, numPasaporte: number, fechaNacimiento: Date) {
      super(nombre, apellido, numPasaporte, fechaNacimiento);
    }

    public saludar(): void {
        console.log(`Buen dia, mi nombre es ${this.nombre} y soy el masajista de  la seleción de fútbol de Costa Rica`);
    }
  
    public darMasaje(): void {
      console.log(`${this.nombre} está dando un masaje.`);
    }
}