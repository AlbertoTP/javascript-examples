// crear un errror
try {
    throw new Error('Error tipo1');
    
    console.log("Esto nunca se ejecuta");
}
catch(e){
    console.log(e.message);
}
finally {
    console.log("finalmente");
}


//Crear un error (objeto)
try{
    throw {
        nombreerror:"Error tipo1",
        accion:"Salir corrirendo a apagar el servidor",
        codigoerror:1
    }
    console.log("Esta parte no se ejecuta");
}
catch(e){
    console.log(e);
    console.log(e.nombreerror);
    console.log(e.accion);
    console.log(e.codigoerror);
    console.log("Parte del catch");
}
finally{
    console.log("Finalmente error(obj)");
}



//Crear un error (funcion anonima)
try{
    throw function(){
        console.log("Funcion del trown...");
    }
    console.log("Esta parte no se ejecuta");
}
catch(e){
    e();
    console.log("Parte del catch");
}
finally{
    console.log("Finalmente error(funcion anonima)");
}



try{
    throw 1;
}
catch(e){
    registroError(e);
}
finally{
    //aqui puede haber un switch
    console.log("Finalmente ()");
}

//esta funcion notifica(bd,mail,ajax,request)
function registroError(e){
    var ahora= new Date();
    console.log("Se registro un error ",e," a las ",ahora);
}