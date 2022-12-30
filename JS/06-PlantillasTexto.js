const nombrePasajero = 'Leonardo'; //inmutabilidad
const apellidoPasajero = 'Lacruz';
let nombreCompleto = `El nombre completo es ${nombrePasajero} ${apellidoPasajero}`; //template string
//con las comillas invertidas podemos mezclar variables, es decir, permite la interpolacion   
console.log(nombreCompleto);

let segundoPasajero = "Diego Castillo";
console.log(`El nombre del segundo pasajero es ${segundoPasajero}`);
segundoPasajero = 13804050;
console.log(`El nombre del segundo pasajero es ${segundoPasajero}`);//se hace la conversion automatica de tipo de datos