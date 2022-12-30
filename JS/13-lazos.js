const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");
const precioCiudades = new Array(500,400,380,200);
const presupuestoDisponible = 100;
let i=0;

//while: 0 o mas veces
//do: 1 o mas veces
while(precioCiudades[i] > presupuestoDisponible && i<ciudadesDisponibles.length){
    i++;
}
if(i==ciudadesDisponibles.length)
    console.log(`No hay ciudades disponibles para tu presupuesto`);
else
    console.log(`Puedes comprar tu boleto para ${ciudadesDisponibles[i]}`);