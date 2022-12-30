const presupuestoDisponible = 300;
//Diccionarios o mapas
const datos= [
    {
        'ciudad': 'Bogota',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'Montevideo',
        'precio': 200
    },
];
//for...valor inicial a final

let ciudadSeleccionada = '';
for(let i=0; i < datos.length && ciudadSeleccionada == '';i++){
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
}
if(ciudadSeleccionada == '')
    console.log(`No hay ciudades disponibles`);
else
    console.log(`Puedes comprar tu boleto para ${ciudadSeleccionada}`);