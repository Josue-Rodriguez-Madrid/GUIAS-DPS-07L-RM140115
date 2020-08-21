class Calculadora{
    numero1:number;
    numero2:number;
    suma():number{
      return this.numero1 + this.numero2;
  
    };
    resta():number{
        return this.numero1 - this.numero2;
    
      };

      multiplicacion():number{
        return this.numero1 * this.numero2;
    
      };

      division():number{
        return this.numero1 / this.numero2;
    
      };

    constructor (numero1:number, numero2:number){
      this.numero1=numero1;
      this.numero2=numero2;
  
    }
 }