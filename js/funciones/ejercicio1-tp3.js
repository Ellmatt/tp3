// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

function numero(y) {
    if (y % 2 === 0) {
       document.write('es par');
    }else{
        document.write('es impar')
    }
    return numero;
  }
  
  numero(parseInt(prompt('ingrese un numero')));
  