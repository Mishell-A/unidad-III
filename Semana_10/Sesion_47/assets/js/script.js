// Objetos literales
//No se recomienda poner con guion al medio del nombre
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    dni_cedula: "36457388" // snake_case (guion bajo)
}
console.log(persona);
//ACCEDER O MODIFICAR UN OBJETO
// objeto.clave = valor;
// objeto["clave"] = valor;

// Accedemos a una propiedad
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades
persona.correo = "micorreo@correo.com";
//Mostramos el objeto
console.log(persona);

// Modificar propiedades
persona.correo = "juandiaz36@correo.com"

// Mostramos el objeto
console.log(persona);

