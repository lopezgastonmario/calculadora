"use strict"
export class Calculadora{
    #pantalla =0;
    #memoria=0;
    constructor(){
     this.#pantalla =0;
      this.#memoria =0;
    }
    get pantalla(){
        return this.#pantalla;
    };
    get memoria(){
        return this.#memoria;
    };
    set Pantalla(nuevaPantalla) {
    this.#pantalla = nuevaPantalla;
    };
    set Memoria(nuevaMemoria){
        this.#memoria = nuevaMemoria;
    };
    suma(num){
        this.#pantalla = this.#pantalla +num;
    }
    resta(num){
        this.#pantalla = this.#pantalla - num;
    }
    multiplicar(num){
        this.#pantalla = this.#pantalla * num;
    }
    dividir(num){
        this.#pantalla = this.#pantalla / num;
    }
    factorial(){
        if (this.#pantalla < 0) {
      console.log("No se puede calcular factorial de un número negativo");
      return;
    }

    let resultado = 1;
    for (let i = 2; i <= this.#pantalla; i++) {
      resultado *= i;
    }

    this.#pantalla = resultado;
    }
    
    elevado(num){
        this.#pantalla = this.#pantalla ** num;
    }
    pasarAMemoria(){
        this.#memoria=this.#pantalla;
        this.#pantalla=0;
    }
    pasarAPantalla(){
        this.#pantalla=this.#memoria;
        this.#memoria=0;
    }
    a0(){
        this.#memoria=0;
        this.#pantalla=0;
    }
}

