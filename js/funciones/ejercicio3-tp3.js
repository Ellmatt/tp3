// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function rectangulo(a, b) {
  console.log(a);
  console.log(b);
  let resultado = 2 * (a + b);
  console.log(resultado);
  if(resultado){ 
     document.write(`El perimetro del rectangulo es ${resultado}`);
}else{
    alert('ingrese un valor numerico')
}

  return rectangulo;
}
rectangulo(
  (a = parseInt(prompt(`Ingrese lado A para calcular su perimetro`))),
  (b = parseInt(prompt("Ingrese lado B paracalcular su perimetro")))
);
