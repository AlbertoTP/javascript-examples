

var a=10;
var b=20;
var c=0;


//var c = (a > b)? a : b;

var c = (a > b)? function(){
    console.log("A es mayor a B");
    return a;
}() : function(){
    console.log("B es mayor a A")
    return b;
}();

//if (a>b){
//    c=a;
//}else{
//    c=b;
//}


console.log(c);


a=undefined;
b=1;
var c = a || b || c;
console.log(c);


var mes =2;

switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 2:
        console.log("Marzo");
        break;
    case (10>5)? 40:6 :
    default:
        console.log("No existe");
        break;
}