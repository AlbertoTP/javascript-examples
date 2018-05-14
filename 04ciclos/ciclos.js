
var i=0

do{
    i++;
    if(i===5){
        continue; //continua (incrementa i)
        //break; //sale del ciclo
    }
    console.log(i);
}while(i<10);


for (var i=0; i<10; i++){
    if (i===5){
        continue;
    }
    console.log(i)
}


var Persona = function(){
    this.nombre="Nombre";
    this.apellido="Apellido";
    this.edad=30;
}

var beto = new Persona();
Persona.prototype.direccion = "Puebla pue."

for (prop in beto){
    console.log(beto.hasOwnProperty(prop));
    console.log(prop,":",beto[prop]);
}

for (prop in beto){
    if (!beto.hasOwnProperty(prop))
        continue;
    console.log(prop,"|",beto[prop]);
}

["a",2,true,"b",3,4,5,false,undefined,8].forEach(function(val){
   console.log(val) ;
});