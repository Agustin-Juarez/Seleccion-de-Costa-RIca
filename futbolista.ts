import { Empleado } from "./empleado";

export class Futbolista extends Empleado {
    protected posicion: string;
    
    constructor(nombre: string, apellido: string,numPasaporte: number, fechaNacimiento: Date, posicion: string) {
      super(nombre, apellido, numPasaporte, fechaNacimiento);
      this.posicion = posicion;
    }
  
    public saludar(): void {
        console.log(`Buen dia, mi nombre es ${this.nombre} y soy futbolista de  la seleción de fútbol de Costa Rica`);
    }
    
    public entrenar(): void {
      console.log(`${this.nombre} está entrenando.`);
    }
}