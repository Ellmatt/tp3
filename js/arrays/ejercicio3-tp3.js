/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */


  
  
  

    do{
        let texto = prompt("Ingrese un texto de hasta 10 caracteres, tener en cuenta que un espacio cuenta como caracter");
  console.log(texto);
  if (texto = true) {
    document.write('-'+ texto)
      } 
      
    } while (confirm("desea ingresar un texto?")); 
    
