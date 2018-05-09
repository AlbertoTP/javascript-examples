//Funciones anonimas

(function(){
  var a =10;
  console.log(a);
  function cambiarA(){
    a=20;
  }
  cambiarA();
  console.log(a);
})();



function ejecutarFuncion(fn){
  if (fn() === 1){
    return true;
  }else {
    return false;
  }
};

console.log(
  ejecutarFuncion( function(){
    console.log("Funcion anonnima ejecutada!");
    return 1;
  })

);



//type of
function identifica(param){
  if ( typeof param == "function"){
    param();
  }else {
    console.log( typeof param );
  }
  console.log("param instanceof Persona: ", param instanceof persona); //si param es de tipopersona
}

identifica(1);
identifica("1");
identifica(true);
identifica({});

function persona(){
  this.nombre="beto";
}
var beto = new persona();

identifica(beto);

identifica(function(){});

identifica(function(){console.log("Soy anonima");})
