let sum = 0;
let cont = 0;
let max = 0;
let min = 200;
function convertirACadena(usuario){
    return JSON.stringify(usuario);
};

//Funcion que deserializa los datos y los muestra en la tabla
function creaUsuario(){
// Rerscatar datos    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;

    if(!todoRelleno(nombre, apellido, edad, ciudad)){
        alert("Todos los campos deben estar rellenos");
    }else{
        // Creo el objeto con los datos
        let usuario = {
            nombreU: nombre,
            apellidoU: apellido,
            edadU: edad,
            ciudadU: ciudad
        };

        //Convertir en JSON el objeto
        let usuarioCadena = convertirACadena(usuario);

        let usuarioObjeto = creaObjeto(usuarioCadena);


        $("tbody").append(creaFila(usuarioObjeto));
        $("#suma").html(suma(edad));
        $("#media").html(media(edad));
        $("#maximo").html(maximo(edad));
        $("#minimo").html(minimo(edad));

        
    }
};

function creaObjeto(usuarioCadena){
    return JSON.parse(usuarioCadena);
};

//Funcion que crea la fila de la tabla
function creaFila(usuarioObjeto){
    return "<tr onclick=\"remove(this)\">" + 
                "<td>" + usuarioObjeto.nombreU + "</td>" +
                "<td>" + usuarioObjeto.apellidoU + "</td>" +
                "<td>" + usuarioObjeto.edadU + "</td>" +
                "<td>" + usuarioObjeto.ciudadU + "</td>" + 
            "</tr>";
};

function todoRelleno(nombre, apellido, edad, ciudad){

    let correcto = false;
    if(nombre != "" && apellido != "" && edad != "" && ciudad != ""){
        correcto = true;
    };
    return correcto;
};

function suma(edad){

    sum += parseInt(edad);
    return sum;

    
};

function media(){

    cont++;
    let media = sum/cont;

    return media;

};

function maximo(edad){

    let num = parseInt(edad);
    if(max < num){
        max = num;
    };

    return max;
};

function minimo(edad){
    
    let num = parseInt(edad);
    if(min > num){
        min = num;
    };

    return min;
};

function remove(tr){

    tr.remove();
};