// EJER1
let cadenaTexto = "hola-adios-bye";
/**
 *
 *
 * @param {*} cadena
 * @return {*} 
 */
function camelize(cadena) {
  let palabras = cadena.split("-");
  let nuevaCadena = palabras[0];
  for (let i = 1; i < palabras.length; i++) {
    nuevaCadena += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  return nuevaCadena;
}

console.log(camelize(cadenaTexto));

// EJER2
let arrayNumeros = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function filtrar(arr, a, b) {
  return arr.filter(elemento => elemento >= a && elemento <= b);
}

console.log(filtrar(arrayNumeros, 5, 10));

// EJER3
let arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function filtrarRango(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let elementoActual = arr[i];
    if (elementoActual <= a || elementoActual >= b) {
      arr.splice(i, 1);
    }
  }
}

filtrarRango(arrayNumeros2, 5, 12);
console.log(arrayNumeros2);

// EJER4
let arrayNumeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ordenDescendente = (a, b) => b - a;
arrayNumeros3.sort(ordenDescendente);
console.log(arrayNumeros3);

// EJER5
let palabras = ["A", "B", "D", "C", "Z", "b", "a", "z", "y"];
function copiarOrdenado(arr) {
  let copiaArr = arr.slice();
  return copiaArr.sort();
}
console.log(copiarOrdenado(palabras));

// EJER6
let empleados = [
  { name: "Laura", age: 20 },
  { name: "Pablo", age: 30 },
  { name: "Juan", age: 26 },
];
let nombresEmpleados = empleados.map(usuario => usuario.name);
console.log(nombresEmpleados);

// EJER7
let personas = [
  { name: "Juan", surname: "Perez", id: 123 },
  { name: "Pedro", surname: "Gonzalez", id: 12 },
  { name: "Carla", surname: "Sanchez", id: 56 },
  { name: "Marta", surname: "Lopez", id: 30 },
];

let nuevaListaPersonas = personas.map(persona => ({
  nombreCompleto: `${persona.name} ${persona.surname}`,
  id: persona.id
}));

console.log(nuevaListaPersonas);

// EJER8
let objetosEdades = [
  { age: 78 },
  { age: 12 },
  { age: 56 },
  { age: 30 },
];

function ordenarPorEdad(usuarios) {
  let ordenarEdad = (a, b) => a.age - b.age;
  usuarios.sort(ordenarEdad);
}

ordenarPorEdad(objetosEdades);
console.log(objetosEdades);

// EJER9
let arrayNumeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [array[i], array[indiceAleatorio]] = [array[indiceAleatorio], array[i]];
  }
}

mezclar(arrayNumeros4);
console.log(arrayNumeros4);

// EJER10
let usuariosEdades = [
  { name: "Juan", surname: "Perez", age: 15 },
  { name: "Pedro", surname: "Gonzalez", age: 25 },
  { name: "Carla", surname: "Sanchez", age: 56 },
  { name: "Marta", surname: "Lopez", age: 30 },
];

function obtenerEdadPromedio(usuarios) {
  let sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.age, 0);
  return sumaEdades / usuarios.length;
}

console.log(obtenerEdadPromedio(usuariosEdades));

// EJER11
let usuariosID = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

function agruparPorId(array) {
  return array.reduce((acumulador, valor) => {
    acumulador[valor.id] = valor;
    return acumulador;
  }, {});
}

console.log(agruparPorId(usuariosID));
