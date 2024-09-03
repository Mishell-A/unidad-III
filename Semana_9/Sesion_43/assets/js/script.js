//Modificación de arrays

// .map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada a cada uno de los elementos

// 1 -> Dado el siguiente array de números, crear un nuevo array con cadauno de los números múltiplicados por 2.
//let nums = [1,2,3,4,5];
//console.log(nums);
/*
let doubledNum = [];

for (let num of nums) {
    doubledNum.push(num * 2);
}
*/
//Usando map
/*
let doubledNum = nums.map((n) => n * 2);
console.log(doubledNum);

//El arreglo original no se modifica
console.log(nums);

// 2 ->  Dado el siguiente array de strings, crear un nuevo array indicando que elementos estan en mayuscula(true) y  cuales estan en minuscula (false)
console.log(2);
const letras = ["a", "B", "c", "D", "a"] //[f,t,f,t,f]
// c : chart
let seaMayusc = letras.map((c) => c.toUpperCase() == c);
console.log(seaMayusc);

// 3 -> Dado el siguiente array de strings, crear un nuevo array con la siguiente pauta. Si la palabra tiene mas de 7 letras se pondra "palabra larga", en caso contrario se pondra "palabra corta"

let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
];
  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

//let palabraSize = palabras.map(p => p.length>7 ? "palabra larga":"palabra corta")

//let palabraSize = palabras.map((p) => `palabra ${p.lenght > 7 ? "larga" : "corta"}` );



let tipoPalabra = palabras.map((c) => {
    if (c.length > 7)
    {
        return console.log("palabra larga");
    } else {
        return "palabra corta";
    }
});

//console.log(tipoPalabra);

// .reduce()
// El metodo reduce aplica una funcion a un acumulador y a cada valor deun array ( de izquierda a derecha) para reducirla a un único valor.

// 4 -> Dado el siguiente array de números, calcular la suma de todos los elementos

const nums = [1,2,3,4,5];
console.log(nums);

let suma = nums.reduce((a,b) => a+b, 0);

console.log(suma);

// 5 -> Dado el mismo array, multiplicar todos los números

let multiplicacion = nums.reduce((a,b) => a*b, 1);

console.log(multiplicacion);
*/

// .sort(funcionDeComparacion)
// El metodo sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado, la ordenación no es necesariamente estable. El metodo de ordenación por defecto responde a la posición del valor de cada elemento Unicode

let puntos = [2,1,21,10];
console.log(puntos);

// Ordeno el arreglo
// Tomado el primer caracter y lo ordena siguiendo eso, luego si se repite le primero ve el segundo y asi se ordena
puntos.sort();
console.log("Ordenamiento por defecto");
console.log(puntos);

//Ordenamiento númerico estricto
// a - b : a sea menos que b
puntos.sort((a,b) => a - b);
console.log("Ordenamiento número estricto");
console.log(puntos);