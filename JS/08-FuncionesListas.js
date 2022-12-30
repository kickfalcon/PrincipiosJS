const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina","Uruguay", "Venezuela"];
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");

const cantidadCiudades = ciudadesDisponibles.length;//no lleva parentesis
console.log(`Tenemos ${cantidadCiudades} disponibles`);
console.log(`Tenemos ${paisesDisponibles.length} disponibles`);

ciudadesDisponibles.shift();//remueve el primer elemento
console.log(`Tenemos ${ciudadesDisponibles.length} disponibles`);
ciudadesDisponibles.pop();//remueve el ultimo elemento
console.log(`Tenemos ${ciudadesDisponibles.length} disponibles`);
console.log(ciudadesDisponibles);

const paisesFiltrados = paisesDisponibles.filter((e)=> e.length > 6);//filtrado de paises
console.log(paisesFiltrados);

console.log(paisesDisponibles.join('-'));//unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.sort());//ordena la lista de paises
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);//posicion especifica de un elemento

//unificar dos listas
const listasPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(`Lista de paises y ciudades ${listasPaisesYCiudades}`);
console.log(`Lista de paises ${paisesDisponibles}`);
