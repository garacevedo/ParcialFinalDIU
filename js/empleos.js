document.addEventListener("DOMContentLoaded", function (event) {
  var divOpiniones = document.getElementById("empleoss");

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
  var divOpiniones = document.getElementById("empleoss");
  console.log(listadoOpiniones);
  var cont = 0;
  listadoOpiniones.forEach(element => {
    divOpiniones.innerHTML = divOpiniones.innerHTML + ' <div class="accordion-item"><h2 class="accordion-header" id="item-' + cont + '"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-' + cont+'" aria-expanded="true" aria-controls="collapse-' + cont+'"> ' + element['nombre'] + '</button>  </h2>  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="item-' + cont + '" data-bs-parent="#accordionExample">    <div class="accordion-body"><ul><li>' + element['descripcion'] + '</li> <li>La fecha de cierre para el puesto es el: ' + element['postulacion'] + '</li> <li>Salario: ' + element['salario'] + '</li> <li>Enviar correo a: empleos@eventformal.com</li> </ul> </div>  </div></div>';
    //alert(cont);
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
    divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="accordion-item"><h2 class="accordion-header" id="item-' + cont + '"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-' + cont+'" aria-expanded="true" aria-controls="collapse-' + cont+'"> ' + element['nombre'] + '</button>  </h2>  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="item-' + cont + '" data-bs-parent="#accordionExample">    <div class="accordion-body"><ul><li>' + element['descripcion'] + '</li> <li>La fecha de cierre para el puesto es el: ' + element['postulacion'] + '</li> <li>Salario: ' + element['salario'] + '</li> <li>Enviar correo a: empleos@eventformal.com</li> </ul> </div>  </div></div>';

  
    //alert(cont);
    cont++;
  });
  return false;
}


/*
document.addEventListener("DOMContentLoaded", function (event) {
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
    divOpiniones.innerHTML = divOpiniones.innerHTML + '<h4>' + element['nombre'] + ' </h4><ul><li>' + element['descripcion'] + '    </li><li>' + element['postulacion'] + '</li><li>' + element['salario'] + '</li><li>Enviar correo a: empleos@eventformal.com</li>         </ul>';
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
    divOpiniones.innerHTML = divOpiniones.innerHTML + '<h4>' + element['nombre'] + ' </h4><ul><li>' + element['descripcion'] + '    </li><li>' + element['postulacion'] + '</li><li>' + element['salario'] + '</li><li>Enviar correo a: empleos@eventformal.com</li>         </ul>';

    /*divOpiniones.innerHTML = divOpiniones.innerHTML + '<h2 class="accordion-header" id="flush-" '+ cont + '"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" '+ cont + '" aria-expanded="false" aria-controls="flush-collapse" '+ cont + '"> ' + element['nombre'] + '</button></h2>  <div id="flush-collapse" '+ cont + '" class="accordion-collapse collapse" aria-labelledby="flush-" '+ cont + '" data-bs-parent="#accordionFlushExample"><div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first items accordion body.</div> </div>';

    cont++;
  });
  return false;
}

/*
<h2 class="accordion-header" id="flush-" '+ cont + '">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" '+ cont + '" aria-expanded="false" aria-controls="flush-collapse" '+ cont + '">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="flush-collapse" '+ cont + '" class="accordion-collapse collapse" aria-labelledby="flush-" '+ cont + '" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                          </div>

<h4>' + element['nombre'] + ' </h4>
  <ul>
                                    <li>' + element['descripcion'] + '    </li>
                                    <li>' + element['postulacion'] + '</li>
                                    <li>' + element['salario'] + '</li>
                                    <li>Enviar correo a: empleos@eventformal.com</li>
                                </ul>
  */



                            