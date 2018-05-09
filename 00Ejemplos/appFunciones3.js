
//Prototipo no se agrega directamente al objeto

function Persona() {
  this.nombre="Nombre";
  this.apellido="Apellido";
  this.edad=30;
  this.pais="Mexico";

}

Persona.prototype.imprimirInfo = function () {
  console.info(this.nombre +" "+ this.apellido +"("+ this.edad +")" );
};

Persona.prototype.pais = "Mexico";

var person = new Persona();
console.log(person);
console.log(person.imprimirInfo());

Number.prototype.esPositivo = function () {
  if (this>0){
    return true;
  }else {
    return false;
  }
};
