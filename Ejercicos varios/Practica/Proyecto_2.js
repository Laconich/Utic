// Convertidor de millas a kilómetros
const millas = parseFloat(prompt("Ingrese la cantidad de millas:"));
const conversionFactor = 1.60934;

// Verificar si el valor ingresado es un número válido
if (isNaN(millas)) {
  console.log("Por favor, ingrese un valor numérico válido para las millas.");
} else {
  const kilometros = millas * conversionFactor;
  console.log(`La distancia de ${millas} millas es igual a ${kilometros.toFixed(4)} kilómetros`);
}


// Calculadora IMC
const peso = parseFloat(prompt("Ingrese el peso en Kg:"));
const altura = parseFloat(prompt("Ingrese la altura en metros:"));

const imc = peso / (altura ** 2);

console.log(`El Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);


// Tipo de dato
const c1 = "5"; // String
const c2 = 91;   // Number

// Líneas 1 y 2
let empty1 = undefined; // line 1
let empty2 = null;      // line 2

// Valores y salidas en consola
let a1 = "Hello";
a1 = "world";
console.log(a1); // "world"

let a2 = "world";
let b2 = `Hello ${a2}!`;
console.log(b2); // "Hello world!"

let a3 = "Hello";
a3 = prompt("world");
console.log(a3); // El valor ingresado por el usuario

let a4 = 5;
let b4 = 70;
let c4 = "5";
b4++;
console.log(b4); // 71

let result = 3 + 4 * 2 / 8;
console.log(result); // 4

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total); // 17
let total2 = 500 + 100 / 5 + total--;
console.log(total2); // 538

const a5 = 5;
const b5 = 10;
console.log(a5 > 0 && b5 > 0);    // true
console.log(a5 == 5 && b5 == 4);  // false
console.log(true || false);       // true
console.log(a5 == 3 || b5 == 10);  // false
console.log(a5 == 3 || b5 == 7);   // true
