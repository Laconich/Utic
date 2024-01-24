function primero(numero1, numero2) {
    // Verificar si ambos parámetros son números
    if (typeof numero1 === 'number' && typeof numero2 === 'number') {
      // Sumar los dos números
      var suma = numero1 + numero2;
      console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
    } else {
      console.log('Por favor, ingrese dos números válidos.');
    }
  }

function segundo(nombre) {
    console.log(`El nombre ingresado es ${nombre}`)
}

function tercero() {
    // Array con tres elementos
    var listaDeSuper = ["Manzanas", "Leche", "Pan"];
  
    // Elemento a buscar
    var elementoBuscado = "Leche";
  
    // Utilizar .find para buscar el elemento en el array
    var resultado = listaDeSuper.find(function(elemento) {
      return elemento === elementoBuscado;
    });
  
    // Verificar si se encontró el elemento
    if (resultado !== undefined) {
      console.log(`Se encontró "${elementoBuscado}" en la lista de compras.`);
    } else {
      console.log(`"${elementoBuscado}" no se encontró en la lista de compras.`);
    }
  }

segundo("Jose Laconich");
primero(7,3);
tercero();