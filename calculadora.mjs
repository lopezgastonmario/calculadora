// calculadora.mjs
import { Calculadora } from './calculadoraClase.mjs';

const calc = new Calculadora();
const pantalla = document.getElementById("input");

let operando1 = null;
let operador = null;

window.addEventListener("load", () => {
    const contenedor = document.querySelector(".calculadora");
    contenedor.addEventListener("click", onBotonClick);
});

function onBotonClick(evento) {
    const boton = evento.target;
    const valor = boton.innerText;

    // Números
    if ("0123456789".includes(valor)) {
        pantalla.value += valor;
    } 
    // Operadores
    else if (["+", "-", "x", "÷"].includes(valor)) {
        operando1 = Number(pantalla.value);
        operador = valor;
        pantalla.value = ""; // seguimos limpiando visualmente
    } 
    // Igual
    else if (valor === "=") {
        const operando2 = Number(pantalla.value);
        let resultado = 0;
        switch (operador) {
            case "+": resultado = operando1 + operando2; break;
            case "-": resultado = operando1 - operando2; break;
            case "x": resultado = operando1 * operando2; break;
            case "÷": resultado = operando1 / operando2; break;
        }
        calc.Pantalla = resultado; // actualiza la clase
        pantalla.value = calc.pantalla;
        operando1 = null;
        operador = null;
    } 
    // AC
    else if (valor === "AC") {
        calc.a0();
        pantalla.value = "";
        operando1 = null;
        operador = null;
    }
}