const ciudadDestino = 'Santiago';
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");

//Palabra reservada if
//evalua una condicion
console.log(`Verificando pasajes para ${ciudadDestino}`);
if(ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    console.log(`Pasaje disponible para venta`);
}else{
    console.log(`Pasaje no disponible para venta`);
}

const valorPasaje = 1000;
if(valorPasaje === 1000){//el triple comparador compara tanto valor como tipo de dato
    console.log('El pasaje vale 1000');
}

//Operadores logicos
// && = AND (Y): se deben cumplir ambas condiciones
// || = OR (O): se debe cumplir al menos una condicion
// ! = NOT (NO): no se cumple la condicion
let edadPasajero = 19;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >=18 || estaAcompanado)){
    console.log(`Pasaje disponible para venta`);
}else{
    console.log(`Pasaje no disponible para venta o pasajero menor de edad`);
}

edadPasajero = 17;
estaAcompanado=false;
//Aplicando logica negativa
if(!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >=18 || estaAcompanado))){
    console.log(`Pasaje no disponible para venta o pasajero menor de edad`);
}else{
    console.log(`Pasaje disponible para venta`);
}

