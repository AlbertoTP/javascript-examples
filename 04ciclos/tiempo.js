
//ejecutar cuando pase cierto tiempo
setTimeout(function(){
    console.log("Paso un segundo");
},1000);


//se repita cada cierto tiempo
var segundos=0;
var intervalo = setInterval(function(){
    segundos++;
    console.log("Seg: ",segundos);
    if (segundos===3){
        clearInterval(intervalo);
    }
},1000);


var beto = {
    nombre:"beto",
    edad:23,
    imprimir: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.nombre," : ",self.edad);
        },2000);
    }
}

beto.imprimir();