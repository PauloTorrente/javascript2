const booleano1 = true
const booleano2 = false
const booleanoAnd = booleano1 && booleano2
const booleanoOr = booleano1 || booleano2
const booleanoNot = !booleano1
const booleanoMix0 = booleano1 || booleano2 && booleano1 || !booleano1 && booleano2


let valorDivision = (17/3).toFixed(2)
let valorResto = (17-7)
let A = 9
let B = "9"
if (A === B) {
    console.log("son iguales")
} else {
    console.log("No son iguales")
}
let mochila = ["lapiz", "estuche", "cuaderno", "libro", "notebook", "telefono", "audifonos", "papel", "switch", "bombas"];
if (mochila.length >= 10) {
    console.log("No puedo cargar más de 10 elementos")
} else if (mochila.length <= 10) {
    console.log("Que bien voy con mi mochila")
} else {
    console.log("Creo que no necesito una mochila")
}


let contarHasta10 = 0;

while(contarHasta10 < 10){
    contarHasta10++;
}
console.log(contarHasta10);

let diaFestivo = true || false
if (diaFestivo == true) {
    console.log("hoy trabajo")
}else if (diaFestivo == false){
    console.log("Hoy no trabajo")
}

const araybucle = [4,5,6,7,8,9,10,11,12];
let ys = 4;

while (ys < araybucle.length) {
       console.log( araybucle[ys]);
       ys++;
}
