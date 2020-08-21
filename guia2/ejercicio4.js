"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.suma = function () {
        return this.numero1 + this.numero2;
    };
    ;
    Calculadora.prototype.resta = function () {
        return this.numero1 - this.numero2;
    };
    ;
    Calculadora.prototype.multiplicacion = function () {
        return this.numero1 * this.numero2;
    };
    ;
    Calculadora.prototype.division = function () {
        return this.numero1 / this.numero2;
    };
    ;
    return Calculadora;
}());
