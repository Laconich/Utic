// Crear un array vacío para la lista de compras
var listaCompras = [];

// Agregar elementos a la lista
listaCompras.push("Leche", "Pan", "Manzanas");

// Actualizar el elemento "Pan" con "Bananas" y "Huevos"
var indicePan = listaCompras.indexOf("Pan");
if (indicePan !== -1) {
  listaCompras.splice(indicePan, 1, "Bananas", "Huevos");
}

// Remover el último elemento del array y mostrar en consola
var ultimoElemento = listaCompras.pop();
console.log("Elemento removido:", ultimoElemento);

// Ordenar la lista alfabéticamente
listaCompras.sort();

// Encontrar y mostrar el índice del valor "Leche"
var indiceLeche = listaCompras.indexOf("Leche");
console.log("Índice de 'Leche':", indiceLeche);

// Después de "Bananas", agregar "Zanahorias" y "Lechuga"
var indiceBananas = listaCompras.indexOf("Bananas");
listaCompras.splice(indiceBananas + 1, 0, "Zanahorias", "Lechuga");

// Crear una nueva lista con jugo y pop
var nuevaLista = ["Jugo", "Pop"];

// Combina ambas listas y agrégala dos veces al final de la primera lista
listaCompras = listaCompras.concat(nuevaLista, nuevaLista);

// Obtener el último índice de "Pop" y mostrar en consola
var ultimoIndicePop = listaCompras.lastIndexOf("Pop");
console.log("Último índice de 'Pop':", ultimoIndicePop);

// Mostrar la lista final
console.log("Lista final:", listaCompras);
