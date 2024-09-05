// Recordando los objetos

const perro = {
    nombre : "Firulais",
    raza : "Doberman",
    edad : 5,
    es_adoptado: true, //No olvidar el snake case
    actividades: ["correr","jugar","comer"],
    amigos: [
        {
            nombre: "Rocky",
            raza: "Pastor Aleman"
        },
        {
            nombre: "Luna",
            raza: "Labrador"
        },
    ],
};

console.log(perro);

//Acceder a las propiedades de un objeto
console.log(perro.nombre);
console.log(perro["es_adoptado"]);
console.log(perro.actividades);
console.log(perro.actividades[2]);
console.log(perro.amigos);
// Mostrar por consola "Pastor Aleman"
console.log(perro.amigos[0].raza);
console.log(perro.amigos[0]["nombre"]);

//Modificar propiedades de un objeto

perro.edad = 6;
gperro.amigos[0]["raza"] ="Pastor Alemán";
console.log(perro);

// Añadir nuevas propiedades a un objeto
perro.color = "marrón oscuro";
perro.amigos[1].color = "blanco";
console.log(perro);