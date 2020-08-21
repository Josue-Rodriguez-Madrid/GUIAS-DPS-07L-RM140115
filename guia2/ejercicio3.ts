class Empleado {
    nombre:string;
    salario:number;
    descuento:number;
    DeduccionSalario():number{
      return this.salario-this.descuento;
  
    };
    constructor (salario:number, nombre:string, descuento:number){
      this.salario=salario;
      this.nombre=nombre;
      this.descuento=descuento;
  
    }
 }