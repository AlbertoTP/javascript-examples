var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.5412345678;
console.log(num1);
//redondeo
console.log(Math.round(num1));
//Para obtener decimales
console.log((Math.round(num1*100))/100); //con 2

//quita decimales (no redondeo)
console.log(Math.floor(num1));

var rnd = Math.random();
console.log(rnd);

function randomEnter(min,max){
  console.log(Math.random(),"*(",max,"-",min,"+1)+",min);
  return Math.floor(Math.random()*(max-min+1)+min);
}
console.log( randomEnter(1,6) );

console.log("Raiz de 16:",Math.sqrt(16));
console.log("2^5:",Math.pow(2,5));
