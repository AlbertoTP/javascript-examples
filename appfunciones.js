
var a =30;

function primeraFuncion(){
  var a = 20;
  console.log(a);
}

function imprimir( nombre, apellido ){
  apellido = apellido || "Empty"
  /*if ( apellido === undefined ){
    apellido="Sin_apellido"
  }*/
  console.log(nombre+" "+apellido);
}

primeraFuncion();
//imprimir("Nombre1", "apellido1")
//imprimir("Nombre1")

//Mandar por objeto
function imprimirObj(persona){
  console.log(persona.nombre+" "+persona.apellido);
  persona.nombre="nombreModificado"

}
var persona = {
    nombre: "nombre2",
    apellido: "apellido2"
}
//imprimirObj(persona);
//console.log(persona);


//mandar function
function imp(fn){
  fn();
}

var mifuncion = function(){
  console.log("miFuncion");
}

imp(mifuncion);

//Retorno
function obtenerAleatorio(){
  return Math.random();
}

function esMayor05(){
  if (obtenerAleatorio() > 0.5){
    return true
  }else{
    return false
  }
}

if (esMayor05()){
  console.log("Es mayor a 0.5");
}else {
  console.log("Es menor a 0.5");
}


function crearPersona(nombre, apellido){
  return {
    nombre: nombre,
    apellido: apellido
  }
}
var persona = crearPersona("Name","LastName");
//console.log(persona.nombre+ " " +persona.apellido);


//Funciones que regresan Funciones
function creaFuncion(){
  return function(nombre){
    console.log("Me creo "+nombre);
    return function() {
      console.log("Segunda funcion");
    }
  }
}


var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();
