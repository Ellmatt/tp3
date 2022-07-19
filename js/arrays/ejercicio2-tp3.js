/*  Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
 Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
 */

let nota = parseInt(prompt("ingrese una nota entre 0 y 10"));
if (nota >= 0 && nota <= 10){
switch (nota) {
  case 0:
    alert("muy deficiente: "+ nota);
    break;
  case 1:
    alert("muy deficiente: "+ nota);
    break;
  case 2:
    alert("muy deficiente: "+ nota);
    break;
  case 3:
    alert("insuficiente: "+ nota);
    break;
  case 4:
    alert("insuficiente: "+ nota);
    break;
  case 5:
    alert("suficiente: "+ nota);
    break;
  case 6:
    alert("suficiente: "+ nota);
    break;
  case 7:
    alert("Bien: "+ nota);
    break;
  case 8:
    alert("Notable: "+ nota);
    break;
  case 9:
    alert("Notable: "+ nota);
    break;
  case 10:
    alert("Sobresaliente: "+ nota);
    break;
    default:
        document.write('numero erroneo');
} 
} else {
    alert( 'Ingrese un numero valido')
}
