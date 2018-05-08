
var num=10;
var str="text";
var bol=true;
var und=undefined;
var nul=null;

var obj = {
  numero: 10,
  texto: "nuevo texto",
  objHijo: {
    numero2: 20,
    text2: "nuevo texto2"
  }
};

//Notacion de punto
console.log("Notacion de punto");
var persona = {
  nombre: "Nombre1",
  apellido: "Apellido1",
  edad: 20,
  direccion: {
    pais: "Pais1",
    ciudad: "Ciudad1",
    edificio: {
      nombre: "edificio1",
      telefono: "2222-2222"
    }
  }
}

//console.log(persona.direccion);
//console.log(persona.direccion.pais);

//Si no se puede agregar, este es una opcion
persona.direccion.zipcode = 11102;
//console.log("Direccion",persona.direccion);


//Para acceder a telefono se puede resumir
//console.log(persona.direccion.edificio.telefono);

var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";
console.log("Persona:",persona);


//Notacion de corchete
console.log("Notacion de corchete");

console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);

var campo = "edad";
console.log(persona[campo]);
