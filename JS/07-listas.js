/*const ciudad1 = 'Bogota';
const ciudad2 = 'Lima'; 
const ciudad3 = 'Santiago';

//Definicion de una lista con tipo de dato alfanumerico
//permite mezclar tipo de datos en el array (NO RECOMENDADO)*/
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago"); // el listado comienza en 0
//console.log(ciudadesDisponibles);

//Definicio de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];
//console.log(paisesDisponibles);

paisesDisponibles.push('Uruguay');//push agrega elementos al final
ciudadesDisponibles.push('Montevideo');
//console.log(ciudadesDisponibles);
//console.log(paisesDisponibles);

paisesDisponibles.unshift('Ecuador');//unshift agrega elementos al inicio
ciudadesDisponibles.unshift('Quito');
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//mostrar un elemento de la lista 
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.splice(1,2,'Venezuela','Paraguay');// quito los elementos y los reemplazo con los que anotamos
console.log(paisesDisponibles);
