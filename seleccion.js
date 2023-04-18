"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var futbolista_1 = require("./futbolista");
var entrenador_1 = require("./entrenador");
var masajista_1 = require("./masajista");
var selección = /** @class */ (function () {
    function selección(futbolistas, entrenador, masajista) {
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajista = masajista;
    }
    return selección;
}());
var jugador1 = new futbolista_1.Futbolista("Keylor", "Navas", 162934, new Date('1986-12-15'), "Arquero");
var jugador2 = new futbolista_1.Futbolista("Joel", "Campbell", 358491, new Date('1992-06-26'), "Delantero");
var entrenador = new entrenador_1.Entrenador("Luis Fernando", "Suarez", 374162, new Date('1959-12-23'));
var masajista = new masajista_1.Masajista("Óscar", "Segura", 926356, new Date('1972-10-26'));
var costaRica = new selección([jugador1, jugador2], entrenador, masajista);
console.log(costaRica);
