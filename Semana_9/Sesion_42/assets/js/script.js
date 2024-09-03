/*
// Busqueda de arreglos
let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];

// .indexOf(elemento, desde)
// Devuelve el indice de la primera ocurrencia de un elemento en un arreglo, desde una posición determinada


let indice = letras.indexOf("a");
console.log(indice)
console.log(letras.indexOf("d"));

// Busca desde un indice = indice especifico

console.log(letras.indexOf("a",4))

//Buscamos un elemento que no existe en el arreglo
console.log(letras.indexOf("x"));

// .lastIndexOf(elemento, desde)
//Devuelve el indice de la ultima ocurrencia de un elemento en un arreglo, desde una posición determinada
console.log("lastIndexOf");

console.log(letras.lastIndexOf("a"));
//Busca desde el indice especificado
console.log(letras.lastIndexOf("a",1));

// includes(elementos, desde)
// Determina si un arreglo incluye un determina elemento, devolviendo true a false segun corresponde

console.log("includes");
console.log(letras.includes("c"));
console.log(letras.includes("c",3));
*/

let nums = [34, 65, 23, 45, 96, 143, 4, 56];

// .find
// Devuelve el primer elemento que cumple con una condición, la cual es una funcion de tipo arrow
let conincidencia = nums.find(nums => nums >80);
let conincidenciaIndex = nums.findIndex(nums => nums >80);
//Indica todos los números que cumplan la condición
let filtrado = nums.filter(nums => nums >80);

console.log(conincidencia);
console.log(conincidenciaIndex);
console.log(filtrado);