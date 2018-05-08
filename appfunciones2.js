//Funciones de primera clase


function a(){
  console.log("funcion a");
}

a();

a.nombre="Maria";
a.direccion={
  pais: "mexico",
  ciudad: "puebla",
  edificio: {
    nombre: "B",
    numero: "2",
    piso: 3
  }
}

//This
var persona = {
  nombre: "maria",
  apellido: "diaz",
  imprimirNombre: function(){
    console.log("Nombre completo ", this.nombre+" "+this.apellido);
  },
  direccion: {
    pais: "mexico",
    obtenerPais: function(){
      console.log(this);
      var self = this;

      var nuevaDireccion = function(){
        console.log(this);
        console.log("La direccion es en ",self.pais);
      }

      nuevaDireccion();
    }

  }
};

persona.imprimirNombre();
persona.direccion.obtenerPais();


//New

function Persona(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 33;

  this.nombreCompleto = function(){
    return this.nombre+" "+this.apellido;
  }
}

var ivan = new Persona("Ivan", "Santos");

console.log(ivan);
console.log(ivan.nombre);
console.log(ivan.nombreCompleto());
