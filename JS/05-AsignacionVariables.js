//variable = espacio de memoria que puedo o no cambiar en el tiempo
/*  const> espacio de memoria que luego de asignado, no cambia en el tiempo 
    let> espacio de memoria que luego de asignado, puede cambiar en el tiempo, solo disponible en el bloque en el que se declara
    var (desuso)> espacio de memoria que luego de asignado, puede cambiar en el tiempo, alcance total, puede usarse en todo el programa y sus subbloques
*/ 
const valorPasaje = 1650;
console.log(valorPasaje);
const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";

console.log(nombrePasajero);
console.log(apellidoPasajero);

let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);  

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoDelPasajero);
