$(document).ready(function (){
    //Aqui colocamos nuestro código

    //Con Js
    document.querySelector("#title").innerHTML = "DOM con jQuery"
    
    //Con jQuery
    $("#title").html("DOM con jQuery");

    // Seleccionar por clase
    $(".demo").html("Clase seleccionada");

    // Solo usar el primero de una clase
    $(".demo").first().html("Primer elemento de la clase");

    //Seleccionar un elemento
    // Cambiar atributos, en este caso se cambia de imagen
    // .attr("atributo","valor")
    $("img").attr(
        "src",
        "https://i.pinimg.com/originals/c7/a4/64/c7a46427d279e374be94571d31c78779.jpg")
    $("img").attr("title","Un conejito")

    //Evento de click
    //toggle: Se alterna el aparece y desaparecer- hide() , sho()
    //Arrow function
    
    $("#btn").click(() => $("#resultado").toggle())
    //function
    /*
    $("#btn").click(function() { 
        $("#resultado").toggle();
    });
    */
});