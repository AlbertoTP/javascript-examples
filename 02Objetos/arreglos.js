//Arreglos

var A =[5,4,3,2,1,0];
console.log(A);
console.log(A[0],A[6]);

A.reverse();
console.log(A);

A = A.map(function(element){
  element *= element;
  return element;
})

console.log(A);

A = A.map( Math.sqrt );
console.log(A);

A = A.join("|");
console.log(typeof A,A);

A = A.split("|");
console.log(typeof A,A);

A.push("6");
console.log(A);

A.unshift("-1")
console.log(A);

console.log(A.toString());

var elimine = A.pop();
console.log(A,elimine);

/*
Syntax
array.splice(index, howmany, item1, ....., itemX)
Parameter Values
Parameter 	Description
index 	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany 	Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX 	Optional. The new item(s) to be added to the array
*/
A.splice(2, 1, "10","20","30");
console.log(A, A.length );

//slice(desde_donde, hasta_donde)
A = A.slice(1,3)
console.log(A);


arr=[
  true,
  {
    nombre:"beto",
    apellido:"3"
  },
  function(){
    console.log("Estoy viviendo en un arreglo");
  },
  function(persona) {
    console.log(persona.nombre+" "+persona.apellido);
  },
  ["fernando","carlos","beto","yazmin",
    ["juan","alberto","pablo",
      function(){
        console.log(this);
      }
    ]
  ]
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre+" "+arr[1].apellido);
arr[2]();
arr[3](arr[1]);
arr[3]({
  nombre:"nombre",
  apellido:"apellido"
});
console.log(arr[4][3]);

var arreglo2=arr[4][4];
console.log(arreglo2);
console.log(arr[4][4][1]);
arreglo2[1]="betito";
console.log(arreglo2);

arreglo2[3]();
