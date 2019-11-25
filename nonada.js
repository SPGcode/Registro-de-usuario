//creo un array en vista de crear una función que te de la letra del DNI
const letrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
//defino variables
const body = document.getElementById("body");
const div = document.getElementById("formulario");
const dniUsuario = document.getElementById("inpuId");
const btnReset = document.getElementById("btnReset");
const btnSubmit = document.getElementById("btnSubmit");
const letraDni = document.getElementById("inputLetra");
const form = document.createElement("form");
const btnForm = document.getElementById("btnForm");



function init() {
    //cargo los eventos una vez a cargado todo el código
    btnReset.addEventListener("click", reset, false);
    btnSubmit.addEventListener("click", valLetra, false);
    btnSubmit.addEventListener("click", getInput, false);
    btnForm.addEventListener("click", getForm, false);


}

//importar valores de los input y añadirlos como propiedades al objeto persona
function getInput() {
    if (dniUsuario.value === "") {
        alert("No hay valor en el campo DNI");
    } else {
        persona.dni = dniUsuario.value + letraDni.value;

    }
};

//Validacion del campo de la letra
function valLetra() {
    letra = letraDni.value
    console.log(letra.length);

    if (letra == "" || letra.length !== 1) {
        alert("debe introduzir una letra");
    } else {
        alert("su letra es: " + letraDni.value);
        formApear();
        alert("Por favor rellene el formulario para inscribirse");

    }

}

//Evento aparece formulario
function formApear() {

    let inputName = "<input id='nombre' type='text' placeholder='nombre'><input id='apellidos' type='text' placeholder='Apellidos'><input id='edad' type='text' placeholder='edad'><input id='correo' type='text' placeholder='correo'>";
    form.innerHTML = inputName;
    form.appendChild(div);
    body.appendChild(form);


}

//importar valores de los input y añadirlos como propiedades al objeto persona
function getForm() {
    let inputNombre = document.getElementById("nombre");
    let inputApellidos = document.getElementById("apellidos");
    let inputEdad = document.getElementById("edad");
    let inputCorreo = document.getElementById("correo");

    persona.nombre = inputNombre.value;
    persona.apellidos = inputApellidos.value;
    persona.edad = inputEdad.value;
    persona.correo = inputCorreo.value;
    if (getForm) {
        mostrarObjeto();
    }
}

function reset() {
    dniUsuario.value = "";
    letraDni.value = "";
    form.remove();
}

function mostrarObjeto() {

    alert(persona.nombre + " " + persona.apellidos + " " + persona.edad + " " + persona.correo);

}


const persona = {
    nombre: "",
    apellidos: "",
    dni: "",
    edad: "",
    correo: "",
    contraseña: "",
};

init();