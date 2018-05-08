
function Jugador(nombre,pv,sp){
  this.nombre=nombre;
  this.pv=pv; //puntos de vida
  this.sp=sp; //special points

  this.curar = function(jugadorObjetivo) {
    if (this.sp >= 40){
      this.sp-=20;
      jugadorObjetivo.pv+=20;
    }else {
      console.info(this.nombre+" no tiene sp");
    }
    this.estado(jugadorObjetivo);
  }

  this.tirarFlecha = function(jugadorObjetivo){
    if (jugadorObjetivo.pv>40){
      jugadorObjetivo.pv-=40;
    }else {
      jugadorObjetivo.pv=0;
      console.error(jugadorObjetivo.nombre+" murio!!!");
    }
    this.estado(jugadorObjetivo);
  }

  this.golpe = function(jugadorObjetivo) {
    if (jugadorObjetivo.pv>0){
      if (jugadorObjetivo.pv-50>0){
        this.pv-=5;
        this.sp-=10;
        jugadorObjetivo.pv-=50;
      }else {
        this.sp-=10;
        jugadorObjetivo.pv=0;
        jugadorObjetivo.sp=0;
        console.error(jugadorObjetivo.nombre+" murio!!!");
      }
    }
    this.estado(jugadorObjetivo);

  }

  this.estado=function(jugadorObjetivo) {
    console.info(this);
    console.info(jugadorObjetivo);
  }
};

var gandalf = new Jugador("Gandalf",200,100);
var legolas = new Jugador("Legolas",150,300);
var aragon = new Jugador("Aragon",300,400);

console.log(gandalf);
console.log(legolas);
console.log(aragon);

//gandalf.curar(legolas);
