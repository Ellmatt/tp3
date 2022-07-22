// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
//  A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
//  sólo por minúsculas o por una mezcla de ambas.

function textos(texto){
    console.log(texto)
    
  if (texto === texto.toUpperCase()) {
    document.write(`La cadena de texto "${texto}" esta compuesta por solo mayusculas`);
  } else if (texto === texto.toLowerCase()) {
    document.write(`La cadena de texto "${texto}" esta compuesta por solo minusculas`);
  }else {
    document.write(`La cadena de texto "${texto}" esta compuesta por mayusculas y minusculas`);
  }
return textos
}
textos(prompt('ingrese una frase'))


