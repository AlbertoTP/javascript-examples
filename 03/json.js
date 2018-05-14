


var objetoJS = {
    nombre:"beto",
    edad:23
};

console.log("Objeto literal",objetoJS);

var jsonString = JSON.stringify(objetoJS);
console.log(jsonString);

var objetodesdeJSON = JSON.parse( jsonString );
console.log(objetodesdeJSON);

console.log(objetodesdeJSON.nombre);
console.log(objetodesdeJSON.edad);