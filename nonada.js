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
    btnSubmit.addEventListener("click", getInput, false);
    btnForm.addEventListener("click", getForm, false);


}

//Crear una funcion que te de la letra del DNI
function darLetra() {
    // almaceno en una variable la cuenta para hallar la letra del DNI 
    let cuenta = dniUsuario.value % 23;
    let indice = letrasDni.indexOf(letraDni.value);
    //Valído la letra
    if (cuenta === indice) {
        return true;
    } else {
        alert("La letra no coincide con su número DNI");
    }
}


//importar valores de los input y añadirlos como propiedades al objeto persona
function getInput() {
    let igualLetra = darLetra();
    if (dniUsuario.value === "") {
        alert("No hay valor en el campo DNI");
    } else if(igualLetra){
        valLetra();
    } else {
    
        persona.dni = dniUsuario.value + letraDni.value;
    }
};

//Validacion del campo de la letra
function valLetra() {
    letra = letraDni.value

    if (letra == "" || letra.length !== 1) {
        alert("debe introduzir una letra");
    } else {
        alert("su letra es: " + letraDni.value);
        formApear();
        alert("Por favor rellene el formulario para inscribirse");

    }
}

function valDni() {
    if (dniUsuario.value === "") {
        alert("debe introducir el DNI")
    }
}

//Evento aparece formulario
function formApear() {

    let inputForm = "<input id='nombre' type='text' placeholder='nombre'><input id='apellidos' type='text' placeholder='Apellidos'><input id='edad' type='text' placeholder='edad'><input id='correo' type='text' placeholder='correo'>";
    form.innerHTML = inputForm;
    form.appendChild(div);
    body.appendChild(form);


}

//importar valores de los input y añadirlos como propiedades al objeto persona
function getForm() {
    valDni();
    let inputNombre = document.getElementById("nombre");
    let inputApellidos = document.getElementById("apellidos");
    let inputEdad = document.getElementById("edad");
    let inputCorreo = document.getElementById("correo");

    persona.nombre = inputNombre.value;
    persona.apellidos = inputApellidos.value;
    persona.edad = inputEdad.value;
    persona.correo = inputCorreo.value;
    reset();
    none();
}

function reset() {
    dniUsuario.value = "";
    letraDni.value = "";
    form.remove();
}

function none() {
    let divH = document.getElementById("header");
    divH.remove();

    let newDiv = document.createElement("div");
    let content = "<div id='newDiv' class='centrar'><img id='img' src='img/web.png'></div>"
    newDiv.innerHTML = content;
    body.appendChild(newDiv);

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