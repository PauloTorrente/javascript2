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