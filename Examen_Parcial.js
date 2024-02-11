// Paso 1: Obtener los Datos
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let cedula = prompt("Ingrese su número de documento:");

// Paso 2: Guardar los datos del cliente como objeto
const cliente = {
  nombre: nombre,
  apellido: apellido,
  cedula: cedula
};

// Paso 3: Crear arrays para verduras y frutas
const verduras = ["Tomate", "pepino", "espinaca"];
const frutas = ["manzana", "banana", "naranja"];

// Paso 4: Agregar los arrays al objeto de cliente
cliente.verduras = verduras;
cliente.frutas = frutas;
console.log(verduras);
console.log(frutas);

// Paso 5: Eliminar el último elemento de verduras
cliente.verduras.pop();
console.log(verduras);

// Paso 6: Eliminar el primer elemento de frutas
cliente.frutas.shift();
console.log(frutas);

// Paso 7: Mostrar el objeto cliente en la consola del navegador
console.log(cliente);

