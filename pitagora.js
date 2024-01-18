// Solicitar al usuario que ingrese el primer cateto
var inputCateto1 = prompt("Ingresa el valor del primer cateto:");
var cateto1 = parseFloat(inputCateto1);

// Validar el primer cateto
if (isNaN(cateto1)) {
  alert("Por favor, ingresa un valor numérico para el primer cateto.");
} else {
  // Solicitar al usuario que ingrese el segundo cateto
  var inputCateto2 = prompt("Ingresa el valor del segundo cateto:");
  var cateto2 = parseFloat(inputCateto2);

  // Validar el segundo cateto
  if (isNaN(cateto2)) {
    alert("Por favor, ingresa un valor numérico para el segundo cateto.");
  } else {
    // Calcular la hipotenusa usando la fórmula de Pitágoras
    var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

    // Mostrar el resultado al usuarioS
    alert("La hipotenusa es: " + hipotenusa);
    console.log(`La hipotenusa es: ${hipotenusa}`);
  }
}
