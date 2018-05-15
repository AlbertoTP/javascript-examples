
//tener ancho y largo al 100% de body para evitar el click
document.onmousedown=function(arg){
    if (arg.button===2){
        console.log("Se presiono el boton derecho del mouse");
        alert("Click derecho bloqueado");
        return;
    }
    console.log("No hay problema",arg);
}

document.onmouseup=function(){
    var texto = window.getSelection().toString();
    console.log("Texto seleccionado: ",texto);
}