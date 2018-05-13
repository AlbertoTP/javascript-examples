
var a = 3.14159265359;

console.log(a);
console.log("fix ",a.toFixed(2)); //redondeo a 2, max 21

console.log("string ",a.toString());

console.log(a.toPrecision(3)); //toma de izq a derecha

//308 exponentes

var b = new Number("20")

console.log(typeof b, b);
console.log(b.valueOf());


/* Boolean*/
var z = new Boolean();
/*
por defecto es false
solo es false si es 0,-0,false,NaN,undefined
*/
console.log(z);
console.log(z.valueOf());

/*String*/
var s = new String("Beto beto nombre apellido");
//es un objeto no un arreglo de caracteres
console.log(s[0]);

console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log( s.indexOf("t") );
console.log( s.lastIndexOf("t") );

console.log( s.indexOf("beto") );

var nombre = s.substr(5,4)
console.log(nombre);

var nombre = s.substr(0,s.indexOf(" "));
console.log(nombre);

var split = s.split(" ");
console.log(split);
console.log(split.length);

//========== obsoleta
document.write("hola mundo");
document.write(s.italics());
document.write(s.blink());
document.write(s.strike());
document.write(s.bold());
//==========

/*Fecha*/
var hoy = new Date();
console.log("Hoy: ",hoy);

var fMili = new Date(1);
console.log(fMili);


//var fFija = new Date(anio,mes,dia,hora,min,seg,mili);
/*
mes 0-11
hora 0-23:59
*/
var fFija = new Date(2016,11,24,23,10,15,1);
console.log(fFija);

console.log( hoy.getFullYear()+1 );
console.log( hoy.getMonth() );
console.log( hoy.getDate() );
console.log( hoy.getHours() );
console.log( hoy.getMinutes() );
console.log( hoy.getSeconds() );
console.log( hoy.getMilliseconds() );

console.log( hoy.getTime() ); //representacion numerica en milisegundos de una fecha
//se puede utilizar para saber cuanto tarda en ejecutarse

var inicio = new Date();
for (var i=0; i<15000; i++){
  console.log("Algo...");
}

var fin = new Date()
console.log(inicio);
console.log(fin);
console.log("Tardo: ",fin.getTime()-inicio.getTime()," Miliseg.");
console.log("Tardo: ",(fin.getTime()-inicio.getTime())/1000," seg.");
