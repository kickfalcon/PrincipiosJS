const presupuestoDisponible = 500;
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
let i = 0;
let ciudadSeleccionada = '';
do{
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
}while(i < datos.length && ciudadSeleccionada == '');

if(ciudadSeleccionada == '')
    console.log(`No hay ciudades disponibles`);
else
    console.log(`Puedes comprar tu boleto para ${ciudadSeleccionada}`);
