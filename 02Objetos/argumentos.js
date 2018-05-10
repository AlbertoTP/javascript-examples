var arguments=100;

function miFuncion(a,b,c,d){
  console.log( arguments );
  if ( arguments.length !== 4 ){
    console.error("La funcion necesita 4 argumentos");
    return;
  }
  console.log(a,b,c,d);
}

miFuncion(10,20,{},function(){});
miFuncion(10,20,30,40);
miFuncion(10,20,30);
