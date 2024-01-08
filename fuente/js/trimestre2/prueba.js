//DOM

/*
//Listas dinamicas
let aux = document.getElementById("parrafo1");//selecciona el primer elemento que tiene ese id

console.log(aux);
console.log(document.getElementById("parrafo2"));

let aux2 = document.getElementsByTagName("p");//seleccionar elementos por la etiqueta

console.log(aux2[0], aux2.length);

let aux3 = document.getElementsByClassName("parrafo");//selecionar por su clase

console.log(aux3[0], aux3.length);

let aux4 = document.getElementsByName("nombre")//seleccionan los elementos con un atributo con ese nombre

console.log(aux4);*/




//Listas estaticas
let aux5 = document.querySelector("section").querySelector("p");//selector de CSS solo el primero
document.querySelector("section > p");

//let aux6 = aux5.querySelector("p");//saca una lista con las p que hay dentro de la seccion

console.log(aux5);

console.log(document.querySelectorAll("section > p"));//selecciona todos los parrafos de una etiqueta seccion



