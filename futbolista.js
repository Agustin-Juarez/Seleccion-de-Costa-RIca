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
exports.Futbolista = void 0;
var empleado_1 = require("./empleado");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, numPasaporte, fechaNacimiento, posicion) {
        var _this = _super.call(this, nombre, apellido, numPasaporte, fechaNacimiento) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.saludar = function () {
        console.log("Buen dia, mi nombre es ".concat(this.nombre, " y soy futbolista de  la seleci\u00F3n de f\u00FAtbol de Costa Rica"));
    };
    Futbolista.prototype.entrenar = function () {
        console.log("".concat(this.nombre, " est\u00E1 entrenando."));
    };
    return Futbolista;
}(empleado_1.Empleado));
exports.Futbolista = Futbolista;
