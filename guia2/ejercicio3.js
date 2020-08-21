"use strict";
var Empleado = /** @class */ (function () {
    function Empleado(salario, nombre, descuento) {
        this.salario = salario;
        this.nombre = nombre;
        this.descuento = descuento;
    }
    Empleado.prototype.calcularSalarios = function () {
        return this.salario * this.descuento;
    };
    ;
    return Empleado;
}());
