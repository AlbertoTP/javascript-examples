//Se necesita correr en un servidor
/*
    Para que son las cookies
    Informacion que se guarda en la maquina del cliente
    * idioma seleccionado
    * mail
    * nombre usuario
    cosas generales que no son sensibles a la pagina
    
    Definición: Una cookie es un archivo creado por un sitio web que contiene pequeñas cantidades de datos y que se envían entre un emisor y un receptor.
    Propósito principal es identificar al usuario almacenando su historial de actividad en un sitio web específico
    
    document.cookie = "nombre=beto"; //crea cookie
*/



//Recomendable poner fecha de expiración
function crearCookie(nombre,valor){
    //escapar cookie sino no ingresar valor
    valor=escape(valor);
    var hoy = new Date();
    hoy.setMinutes(hoy.getMinutes()+20);
    
    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";"; //crea cookie
    
}

function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMinutes(hoy.getMinutes()-1);
    
    document.cookie = nombre+"=x"+";expires="+hoy.toUTCString()+";"; //crea cookie
}

function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);
    for (var i=0;i<cookieArr.length;i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i]=parArr;
        if (parArr[0]===nombre){
            return unescape(parArr[1]);
        }
    }
    return undefined;
}



var demo = "1234;ñaáéí 345";
console.log(demo);
console.log( escape(demo) );
console.log( unescape( escape(demo) ) );



crearCookie("nombre","Beto");
crearCookie("apellido","3");
crearCookie("mail","beto-3@gmail.com");
crearCookie("direccion","México puebla pue.");
borrarCookie("nombre");


var cookies = document.cookie;
console.log(cookies);

console.log("Obtener cookies");
console.log( getCookie("mail") );
console.log( getCookie("direccion") );