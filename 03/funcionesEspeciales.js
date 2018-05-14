
var carro = {
    color: "blanco",
    marca: "mazda",
    imprimir: function(){
        var salida = this.marca+"-"+this.color;
        return salida;
    }
}

var carro2 = {
    color: "verde",
    marca: "lamborguini"
}


console.log(carro.imprimir());


/* bind establece el objeto y usar el this
    El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. 
*/

var logCarro = function(arg1,arg2){
    console.log("CArro: ",this.imprimir() );
    console.log("Argumentos: ",arg1,arg2);
    console.log("-------------------")
}

var logModeloCarro = logCarro.bind(carro);

logModeloCarro("a","b");



/*
    call invoca la funcion pero primer parametro el que apunta el this
*/


logModeloCarro.call(carro,"123","321");


/*
    apply parecido a call
    solo espera 2 parametros
    objeto que apunta
    arreglo
*/
logModeloCarro.apply(carro,["abc","cba"]);



/*
    Funciones prestadas
*/
console.log( carro.imprimir.call(carro2) );
