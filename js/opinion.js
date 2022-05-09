document.addEventListener("DOMContentLoaded", function (event) {
    var divOpinion = document.getElementById("opinion");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];
        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    // Poblando el div que muestra los Opiniones
    var listadoOpiniones = JSON.parse(localStorage.getItem("arrayOpiniones"));
    var divOpinion = document.getElementById("opinion");
    console.log(listadoOpiniones);
    listadoOpiniones.forEach(element => {
        divOpinion.innerHTML = divOpinion.innerHTML + '<figure class="text-center"><blockquote class="blockquote"><p class="mb-0">' + element["opinion"] +'</p></blockquote><figcaption class="blockquote-footer"><cite title="Source Title">' + element["nombre"] +'</cite></figcaption></figure>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Opiniones
function registrarOpinion() {
    var texto = document.getElementById("texto_opinion");
    var nombre = document.getElementById("nombre");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];
        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    // Agregando un nuevo opinion al array
    array.push({ "nombre": nombre.value, "opinion": texto.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayOpiniones", JSON.stringify(array));

    // Recuperando el array de Opiniones del localStorage
    // para volverlo a mostrar
    var listadoOpiniones = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los Opiniones
    var divOpiniones = document.getElementById("opinion");

    // Recorriendo el array de opinions que viene del localStorage
    listadoOpiniones.forEach(element => {
        // Se añade cada opinion al div como un card
        //divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["opinion"] + '</p></div></div>';
       
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<figure class="text-center"><blockquote class="blockquote"><p class="mb-0">' + element["opinion"] +'</p></blockquote><figcaption class="blockquote-footer"><cite title="Source Title">' + element["nombre"] +'</cite></figcaption></figure>';
    });
    return false;
}

/*
<figure class="text-center">
  <blockquote class="blockquote">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
*/