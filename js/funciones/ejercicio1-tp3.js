/* Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */
do {
  let numero1 = parseInt(prompt("ingrese un numero para sumar"));
  
  
  
  if (numero1 >= 0 ){
    
    document.write((numero1 + numero1))
  } else {
    alert('la opcion ingresada no es un numero')
  }
} while (confirm("desea ingresar un numero?"));
