const cantante = {
    nombre: "Abel",
    edad: 34,
    albumes: [
        {
            titulo: "After Hours",
            año: 2020,
            canciones: [
                { 
                    titulo: "Save Your Tears", 
                    duracion: "3:36"
                },
                {
                    titulo: "Heartless", 
                    duracion: "3:18" 
                },
            ]
        },
        {
            titulo: "Starboy",
            anio: 2016,
            canciones: [
                { 
                    titulo: "Stargirl Interlude", 
                    duracion: "1:52" 
                },
                { 
                    titulo: "Die For You", 
                    duracion: "3:53" 
                },
            ]
        },
    ] ,
};

// 1. Obtener el nombre del cantante

console.log(`El nombre del cantante es: ${cantante.nombre}`);

// 2. Obtener la edad del cantante

console.log(`La edad del cantante es: ${cantante.edad} años`);


// 3. Obtener el título de la primera canción del primer álbum

console.log(`El título de la primera canción del primer álbum es: ${cantante.albumes[0].canciones[0].titulo}`)

// 4. Obtener la duración de la segunda canción del segundo álbum

console.log(`La duración de la segunda canción del segundo álbum es: ${cantante.albumes[1].canciones[1].duracion}`);