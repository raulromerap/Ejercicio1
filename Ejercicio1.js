let usuarioSer = {
    nombre: "Manolo",
    apellidos: "Jimenez",
    edad: 30,
    ciudad: "Murcia"
};

let usuarioJSON;
let usuarioDes;
var resultado = document.getElementById("resultado");

function serializar(){

    usuarioJSON = JSON.stringify(usuarioSer);

    resultado.innerHTML += usuarioJSON;

    console.log(usuarioJSON);
};

function deserializar(){
    usuarioDes = JSON.parse(usuarioJSON);
    
    resultado.innerHTML += "Recuperado: ";

    resultado.innerHTML += "nombre: " + usuarioDes.nombre + ", ";
    resultado.innerHTML += "apellidos: " + usuarioDes.apellidos + ", ";
    resultado.innerHTML += "edad: " + usuarioDes.edad + ", ";
    resultado.innerHTML += "ciudad: " + usuarioDes.ciudad + ", ";

    console.log(usuarioDes);

    document.getElementById("nombre").innerHTML = usuarioDes.nombre;
    document.getElementById("apellido").innerHTML = usuarioDes.apellidos;
    document.getElementById("edad").innerHTML = usuarioDes.edad;
    document.getElementById("ciudad").innerHTML = usuarioDes.ciudad;

    $("#nombrejq").html(usuarioDes.nombre);
    $("#apellidojq").html(usuarioDes.apellidos);
    $("#edadjq").html(usuarioDes.edad);
    $("#ciudadjq").html(usuarioDes.ciudad);
};


