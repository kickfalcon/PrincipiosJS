const ciudadDestino = 'Bogota';
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompanado = true;
console.log(`Verificando pasajes para ${ciudadDestino}`);
if(edadPasajero >=18 || estaAcompanado){
    if(ciudadesDisponibles.indexOf(ciudadDestino) > -1){
        console.log(`Pasaje disponible para venta`);
    }else{
        console.log(`Pasaje no disponible para venta`);
    }
}else{
    if(edadPasajero >=16 && ciudadDestino == 'Lima' ){
        console.log(`Pasaje disponible para venta`);
    }
    console.log('pasajero menor de edad')
}