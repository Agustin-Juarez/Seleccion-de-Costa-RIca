export class Empleado {
  protected nombre: string;
  protected apellido: string;
  protected numPasaporte: number;
  protected fechaNacimiento: Date;
  
  public constructor(nombre: string, apellido: string, numPasaporte: number, fechaNacimiento: Date){
    this.nombre = nombre;
    this.apellido = apellido;
    this.numPasaporte = numPasaporte;
    this.fechaNacimiento = fechaNacimiento;
  }
  
  public saludar(): void {
    console.log(`Buen dia, mi nombre es ${this.nombre} y trabajo para la selección de fútbol de Costa Rica`);
  }
}
