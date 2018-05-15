function evento(arg){
    console.log("Me dispare");
    console.log(arg.x, arg.y);
    
}


var objeto = document.getElementById("objDemo");
//console.log(objeto);

objeto.addEventListener("keypress",evento);


var objeto2 = document.getElementById("objDemo2");
//console.log(objeto);

objeto2.addEventListener("click",evento);