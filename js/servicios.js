document.addEventListener("DOMContentLoaded", function (event) {
    var divOpinion = document.getElementById("servicios");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayServicios") == null) {
        array = [];
        localStorage.setItem("arrayServicios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicios"));
    }

    // Poblando el div que muestra los Opiniones
    var listadoOpiniones = JSON.parse(localStorage.getItem("arrayServicios"));
    var divOpinion = document.getElementById("servicios");
    console.log(listadoOpiniones);
    listadoOpiniones.forEach(element => {
        divOpinion.innerHTML = divOpinion.innerHTML + '<div class="flip-card d-flex align-items-center"><div class="flip-card-inner"><div class="flip-card-front"> <img src=' + element["link"] + 'alt="Avatar" style="width:300px;height:200px;"></div><div class="flip-card-back">    <h2>' + element["nombre"]+'</h2>    <p> ' + element["opinion"] + '</p></div> </div>  </div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Opiniones
function registrarServicio() {
    var texto = document.getElementById("texto_servicio");
    var nombre = document.getElementById("nombre_servicio");
    var link = document.getElementById("link");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayServicios") == null) {
        array = [];
        localStorage.setItem("arrayServicios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicios"));
    }

    // Agregando un nuevo opinion al array
    array.push({ "nombre": nombre.value, "opinion": texto.value, "link": link.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayServicios", JSON.stringify(array));

    // Recuperando el array de Opiniones del localStorage
    // para volverlo a mostrar
    var listadoOpiniones = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los Opiniones
    var divOpiniones = document.getElementById("opinion");

    // Recorriendo el array de opinions que viene del localStorage
    listadoOpiniones.forEach(element => {
        // Se añade cada opinion al div como un card
        //divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["opinion"] + '</p></div></div>';
       
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="flip-card d-flex align-items-center"><div class="flip-card-inner"><div class="flip-card-front"> <img src=' + element["link"] + 'alt="Avatar" style="width:300px;height:200px;"></div><div class="flip-card-back">    <h2>' + element["nombre"]+'</h2>    <p> ' + element["opinion"] + '</p></div> </div>  </div>';
    });
    return false;
}

/*
<div class="flip-card d-flex align-items-center">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="img/services-trabajo.jpg" alt="Avatar" style="width:300px;height:200px;">
                                    </div>
                                    <div class="flip-card-back">
                                        <h2>Reuniones empresariales</h2>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </div>
*/