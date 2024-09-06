// Consumo de API con jQuery

//Obtener urls con id aleatorio
function generateUrl() {
    let id = Math.round(Math.random() * 500)
    return `https://picsum.photos/id/${id}/info`
}

// Funcion para consumir la api
function getPicture() {
    $.ajax({
        type: "GET",
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function (data) {
            renderPicture(data);
        },
    });
}

// Funcion para renderizar la imagen obtenida
function renderPicture(data) {
    //Probando algunos datos
    console.log(data);
    console.log(data.author);

    //Crear mi card utilizando el DOM con jQuery
    let div = $("<div></div>").addClass("card");

    //Creamos una imagen y agregamos su src
    let img = $("<img />").attr("src", data.download_url).addClass("card-img");
    //Agregamos la imagen al div
    div.append(img);

    //Creamos un titulo y agregamos su texto
    let autor = $(`<h3>${data.author}</h3>`).addClass("card-title");
    div.append(autor);

    //Agregamos el contenido al picture-container
    $("#pictures-container").append(div);
}

$(document).ready(function (){
    
    for (let i=0; i<10; i++){
        getPicture(); // Llama la función para obtener la imagen 10 veces.
    }
})
