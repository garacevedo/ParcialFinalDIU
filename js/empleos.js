document.addEventListener("DOMContentLoaded", function(event) {
    var divOpinion = document.getElementById("empleos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Poblando el div que muestra los Opiniones
    var listadoOpiniones = JSON.parse(localStorage.getItem("arrayEmpleos"));
    var divOpinion = document.getElementById("empleos");
    console.log(listadoOpiniones);
    var cont = 0;
    listadoOpiniones.forEach(element => {
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="accordion-item">  <h2 class="accordion-header" id="item-' + cont + '"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> ' + element['nombre'] + '</button>  </h2>  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="item-' + cont + '" data-bs-parent="#accordionExample">    <div class="accordion-body"><ul><li>' + element['descripcion'] + '</li> <li>La fecha de cierre para el puesto es el: ' + element['postulacion'] + '</li> <li>Salario: ' + element['salario'] + '</li> <li>Enviar correo a: empleos@eventformal.com</li> </ul> </div>  </div></div>';
        cont++;
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Opiniones
function registrarEmpleo() {
    var texto = document.getElementById("texto_puesto");
    var nombre = document.getElementById("nombre");
    var postulacion = document.getElementById("fecha_postulacion");
    var salario = document.getElementById("salario");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Agregando un nuevo opinion al array
    array.push({ "nombre": nombre.value, "descripcion": texto.value, "postulacion": postulacion.value, "salario": salario.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayEmpleos", JSON.stringify(array));

    // Recuperando el array de Opiniones del localStorage
    // para volverlo a mostrar
    var listadoOpiniones = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los Opiniones
    var divOpiniones = document.getElementById("opinion");

    // Recorriendo el array de opinions que viene del localStorage
    var cont = 0;
    listadoOpiniones.forEach(element => {
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="accordion-item">  <h2 class="accordion-header" id="item-' + cont + '"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> ' + element['nombre'] + '</button>  </h2>  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="item-' + cont + '" data-bs-parent="#accordionExample">    <div class="accordion-body"><ul><li>' + element['descripcion'] + '</li> <li>La fecha de cierre para el puesto es el: ' + element['postulacion'] + '</li> <li>Salario: ' + element['salario'] + '</li> <li>Enviar correo a: empleos@eventformal.com</li> </ul> </div>  </div></div>';
        cont++;
    });
    return false;
}

/*
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  */