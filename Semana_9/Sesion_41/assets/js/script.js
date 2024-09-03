// Metodos de arrays
/*
let nums = [1,2,3,4,5]

console.log(nums);
nums.push(6);
console.log(nums);

nums.push("nsjnasondok");
console.log(nums);

//arr.pop() --> Elimina el último elemento del array
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// arr.unshift() --> Agrega el valor al del array
console.log("unshift");
nums.unshift(0);
console.log(nums);

//arr.shift --> eliminar el primer elemento del array
console.log("shift");
nums.shift();
console.log(nums);

// arr.slice(begin,end) --> Crea una nueva array con una parte del original, tomando desde el indice de incio a fin sin tomar el ultimo

console.log("slice");
let nums = [1,2,3,4,5,6,7];
let subnums = nums.slice(0,3);

console.log(subnums);
console.log(nums);

// Ejercicio
//Crear el subarray [1,4,5,6]

let subnums2 = nums.slice(2,6);

console.log(subnums2);
*/

//arr.splice(start, deleteCount, item1, item2, ...)
//Elimina elementos del array y opcionalmente agrega nuevos elementos

let nums = [1,2,3,4,5,6,7];
console.log(nums);

//Valor del inicio
console.log("Solo valor de inicio")
let subarr1 = nums.splice(2);
console.log(subarr1);
// El array original se ve modificado (lo que sobra del subarray)
console.log(nums);

//Reasigno el array
console.log("Reasignamos el array");

nums = [1,2,3,4,5,6,7];
console.log(nums);

console.log("Eliminando elementos");
//Se queda con dos elementos del subarray

let subarr2 = nums.splice(2,2);
console.log(subarr2);
console.log(nums);


//Reasigno el array
console.log("Reasignamos el array");

nums = [1,2,3,4,5,6,7];
console.log(nums);

//Abra eliminando elementos 
console.log("Agregando elementos");
//Agrega elementos
let subarr3 = nums.splice(2,4,"a");

console.log(nums);


