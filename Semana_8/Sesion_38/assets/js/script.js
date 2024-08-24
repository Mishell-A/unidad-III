/*let numsImpares = [1, 3, 5, 7, 9];

// Bucle para iterar un array

for (let i= 0; i<numsImpares.length; i++){
    console.log(numsImpares[i]);
}


// Recorrey el array al reves

for (let i=numsImpares.length-1; i>=0; i--) {
    console.log(numsImpares[i]);
}

console.log("");

// Recorrer el array por elementos

for (let num of numsImpares){
    console.log(num);
}

let nums = [];
console.log(nums);

// Agregar los numeros al array vacio

nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

nums[2] = 8693;

console.log(nums);
*/

//Arreglos multidimensionales

/*
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matriz);
console.log(matriz.length);
console.log("");

console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log(matriz[0][0]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][1]);
*/

// Metodos de arrays

let nums = [1,2,3,4,5];
console.log(nums);

//Agregar elemento al final del array

nums.push(6);
nums.push(7);
nums.push("HOLAA");
console.log(nums);

//Borrar el ultimo elemento del array y lo retorna
let elementoEliminado = nums.pop();
// Mostramos el elemento eliminado que guardamos
console.log(elementoEliminado);
//Eliminamos otros dos elementos
nums.pop();
nums.pop();
console.log(nums);