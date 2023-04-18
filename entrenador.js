"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrenador = void 0;
var empleado_1 = require("./empleado");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, numPasaporte, fechaNacimiento) {
        return _super.call(this, nombre, apellido, numPasaporte, fechaNacimiento) || this;
    }
    Entrenador.prototype.saludar = function () {
        console.log("Buen dia, mi nombre es ".concat(this.nombre, " y soy el entrenador de  la seleci\u00F3n de f\u00FAtbol de Costa Rica"));
    };
    Entrenador.prototype.dirigirEntrenamiento = function () {
        console.log("".concat(this.nombre, " est\u00E1 dirigiendo el entrenamiento."));
    };
    return Entrenador;
}(empleado_1.Empleado));
exports.Entrenador = Entrenador;
