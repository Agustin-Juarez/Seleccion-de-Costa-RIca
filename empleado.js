"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellido, numPasaporte, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numPasaporte = numPasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    Empleado.prototype.saludar = function () {
        console.log("Buen dia, mi nombre es ".concat(this.nombre, " y trabajo para la selecci\u00F3n de f\u00FAtbol de Costa Rica"));
    };
    return Empleado;
}());
exports.Empleado = Empleado;
