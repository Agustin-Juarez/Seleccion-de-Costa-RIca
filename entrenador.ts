import { Empleado } from "./empleado";

export class Entrenador extends Empleado {
    
    constructor(nombre: string, apellido: string, numPasaporte: number, fechaNacimiento: Date) {
      super(nombre, apellido, numPasaporte, fechaNacimiento);
    }

    public saludar(): void {
        console.log(`Buen dia, mi nombre es ${this.nombre} y soy el entrenador de  la seleción de fútbol de Costa Rica`);
    }
  
    public dirigirEntrenamiento(): void {
      console.log(`${this.nombre} está dirigiendo el entrenamiento.`);
    }
}