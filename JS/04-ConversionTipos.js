//Tipos de datos

//Alfanumerico
let nombrePasajero = "Pedro Silva"; // const no permite que se cambie el valor de la variable, para eso, usar let
console.log(nombrePasajero);
nombrePasajero = "Ramon Silva";
console.log(nombrePasajero);

//Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
//let valorBoleto = "1650"; se lee como un dato alfanumerico
//se pueden mezclar const y let siempre que estos sean numericos
//console.log(valorBoleto);
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100; 

//Booleano (verdadero/falso)
let boletoActivo = true;

//operaciones aritmeticas
//suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;
let totalBoletos = valorBoleto + valorBoleto * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);
//Orden de precedencia
//1. ()
//2. * y /
//3. + y -
let totalBoletos2 =(valorBoleto + impuestoAeropuerto)+ (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

//Concatenacion de texto
let nombrePasajero2 = "Leonardo";
let apellidoPasajero2 = "Cruz";
let nombreCompleto = nombrePasajero2 + " " + apellidoPasajero2;
console.log(nombreCompleto);

let pasaporte = parseFloat('1000') + parseInt('12'); //genera concatenacion 
let multiplicacion = '1000' / '10'; // entiende que los datos son numeros y los opera
//parseInt y parseFloat convierte los tipos de datos
console.log(pasaporte);
console.log(multiplicacion);

let noEsNumero = parseInt('aaaaa');
console.log(noEsNumero);

