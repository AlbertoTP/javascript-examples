
//son lo mismo
var reg1 = RegExp("a"); //expresion explicita
var reg2 = /a/; //expresion literal

var texto = "HolAA 3 MUndooooO, hooola de nuevoooo 12345\nQué tal?";
console.log(texto);

//regresa donde se encuentra o null
var arr = texto.match( reg2 );
//texto.match( /a/ ); //es lo mismo

console.log(arr);

var vec=[]

vec.push(texto.match( /^a/ )); //^buscar en la primera parte
vec.push(texto.match( /o$/ )); //$busca al final
vec.push(texto.match( /.../ )); //.no importa
vec.push(texto.match( /.o/ )); //.no importa

vec.push( texto.match(/^.o /) ); //del primer caracter y despues o
vec.push( texto.match(/[0-9]/) ); //[]busca en rango
vec.push( texto.match(/[02468]/) ); //busca lo que hay en []

vec.push( texto.match(/[a-z]/) ); //busca en rango a-z
vec.push( texto.match(/[a-zA-z]/) ); //busca en a-z y A-Z
vec.push( texto.match(/^H[a-z] /) ); //al principio H segido de [a-z]
vec.push( texto.match(/^H[aeiou] /) ); //al principio H seguido de una vocal
vec.push( texto.match(/[aeiou].$/) ); //busca al final una vocal seguida de lo que sea
vec.push( texto.match(/[aeiou]. /) ); //busca una vocal seguido de lo que sea
vec.push( texto.match(/ /) ); //si hay espacio (no recomendado)
vec.push( texto.match(/\s/) ); //\s busca cualquier separacion

console.log(vec);

var vec2 = []
//abreviar expresiones regulares
console.log("abreviar expresiones regulares");
vec2.push( texto.match(/[a-zA-Z0-9]/) ); //es igual que abajo
vec2.push( texto.match(/\w/) ); //cualquier palabra (no esta ñ) w=word
vec2.push( texto.match(/\d/) ); //[0-9] d=decimales
console.log(vec2);


console.log("Controles");
var vec3=[]
// controles
//i insensible
//g todas las apariciones
//m multilinea
vec3.push( texto.match(/m/i) );
vec3.push( texto.match(/[aeiou]|é/ig) );
vec3.push( texto.match(/[aeiou]|[áéíóúñ]/ig) );
vec3.push( texto.match(/[aeiouáéíóúñ]/ig) );
console.log(vec3);


console.log("Estructuras de repeticion");
vec4=[];
//Estructuras de repeticion || operadores de repeticion
//encontrar patrones repetitivos
vec4.push( texto.match(/o+/g) ); //que aparece o una o mas veces
vec4.push( texto.match(/o?/g) ); //aparece o ó no (solo busca o, sino deja vacio "")
//CUIDADO! porque si es cadena vacia tambien hace match
vec4.push( texto.match(/o*/g) ); //0 o mas veces
vec4.push( texto.match(/o{2}/) ); //cuantas veces aparece (por lo menos 2)
vec4.push( texto.match(/o{2,}/gi) ); //2 veces y todas las que vengan
vec4.push( texto.match(/o{2,3}/g) ); //de 2 a 3 secuencias de o
//tiene que haber por lo menos 2 a 3 "o" para ser tomadas en cuenta
vec4.push( texto.match(/o{5,7}/g) ); //de 2 a 5 secuencias de o
console.log(vec4);


var text = "Aeropuerto";
console.log(text);

console.log(text.match(/[aeiou]{2,2}/ig));


var text2 = "La Respuesta de la suma es: 50 + 75 = 125";
console.log(text2);
console.log(text2.match(/\d{1,}/g));
console.log(text2.match(/\d{1,}|respuesta/ig));
