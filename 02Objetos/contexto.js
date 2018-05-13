function crearFunciones(){
  var arr = [];
  //contexto
  var num = 1;

  for (var num=1; num<=3; num++){
    arr.push(
      (function(num){ //parametro de contexto
        return function(){
          console.log(num);
        }
      })(num) //parametro que se manda
    );
  }

  return arr;
}


var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
