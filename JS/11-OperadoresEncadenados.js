const ciudadDestino = 'Santiago';
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");
let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false; 

console.log(`Verificando pasajes para ${ciudadDestino}`);

if(ciudadesDisponibles.indexOf(ciudadDestino) > -1 && 
    edadPasajero >=18 && 
    tienePasaporte &&
    !estaCasado){
    console.log(`Paquete para solteros disponible para venta`);
}else{
    console.log(`Pasaje no disponible para venta o pasajero menor de edad`);
}

