//EJERCICIO 1
let cadena = "hola-adios-bye";
function camelize(cadena) {
  let arr = cadena.split("-");
  let palabraNueva = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
       palabraNueva.join(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1));
    }else{
      palabraNueva.join(arr[i])
    }
  }
  return palabraNueva;
}


console.log(camelize(cadena));

//EJERCICIO 2
let arr = [1,2,4,5,6,7,8,9,10,11,12,13]
function filter(arr, a, b) {
  return arr.filter(elemento=>(elemento >= a && elemento <= b));
}


console.log(filter(arr,5,10));

//EJER3
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let elementoActual = arr[i];
   
    if (elementoActual <= a || elementoActual >= b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr,5,12);

console.log(arr);

//EJER4
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let ordenDecreciente = (a,b) => b-a;
arr.sort(ordenDecreciente);
console.log(arr);

//EJER5
let palabras = ["A", "B", "D", "C", "Z", "b", "a", "z", "y"];

function copySorted(arr) {
  let copiaArr = Array.from(arr);
  return copiaArr.sort();
}
console.log(copySorted(palabras));

//EJER6
let users = [
    {name: "Laura", age:20},
    {name: "Pablo", age:30},
    {name: "Juan", age:26},
];
let nombresEmpleados = users.map(usuarios => usuarios.name);
console.log(nombresEmpleados)
  
//EJER7
let objetos = [
    {name: "Juan", surname: "Perez", id: 123},
    {name: "Pedro", surname: "Gonzalez", id: 12},
    {name: "Carla", surname: "Sanchez", id: 56},
    {name: "Marta", surname: "Lopez", id: 30},
]

let nuevoObjeto = objetos.map(persona => ({
    nombreCompleto: `${persona.name} ${persona.surname}`,
    id: persona.id
    })
 );


console.log(nuevoObjeto);
  
//EJER8
let objetos = [
    {age: 78},
    {age: 12},
    {age: 56},
    {age: 30},
  ]
  
  
  function sortByAge(users) {
    let ordenarEdad = (a,b) => a.age-b.age;
  
  
    users.sort(ordenarEdad);
  }
  
  
  sortByAge(objetos);
  
  
  console.log(objetos);
//EJER9
let arr = [1,2,3,4,5,6,7,8,9]

function shuffle(array){
  for (let i = array.length - 1; i >= 0; i--) {
    let indiceRandom = Math.round(Math.random() * (i + 1));
    let indiceActual = array[i];
    array[i] = array[indiceRandom];
    array[indiceRandom] = indiceActual;
  }
}

shuffle(arr);
console.log(arr);

//EJER10
let users = [
    {name: "Juan", surname: "Perez", age: 15},
    {name: "Pedro", surname: "Gonzalez", age: 25},
    {name: "Carla", surname: "Sanchez", age: 56},
    {name: "Marta", surname: "Lopez", age: 30},
  ]
  
  
function getAverageAge(users){
    let contador = 0;
    let sumaEdades = 0;
    users.forEach(function(elemento){
       sumaEdades = elemento.age + sumaEdades;
       contador ++;
    });
    return sumaEdades / contador;
}  
console.log(getAverageAge(users));
//EJER11
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    let nuevoObjeto = {};
    nuevoObjeto = array.reduce((acumulador, valor) =>{
   
    let idActual = valor.id;
    acumulador[idActual] = valor;
    return acumulador;  
    }, {});
     return nuevoObjeto;
}
   
console.log(groupById(users));