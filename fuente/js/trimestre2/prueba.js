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

console.log(aux4);

//Listas estaticas
let aux5 = document.querySelector("section").querySelector("p");//selector de CSS solo el primero
document.querySelector("section > p");

//let aux6 = aux5.querySelector("p");//saca una lista con las p que hay dentro de la seccion

console.log(aux5);

console.log(document.querySelectorAll("section > p"));//selecciona todos los parrafos de una etiqueta seccion



//CAMBIAR PROPIEDADES Y ATRIBUTOS 
//TIPOS DE NODOS
console.log(document.getElementById("aleatorio").nodeType);//Saber el tipo de nodo
console.log(document.getElementsByTagName("body")[0].firstChild);



//Cambiar propiedades
//inerHTML, outerHTML

console.log(document.getElementById("introduccion").innerHTML);//Acceder a las propiedades de este elemento, el texto en este caso
console.log(document.getElementsByTagName("header")[0].innerHTML);//Tmb incluira las etiquetas en este caso
console.log(document.getElementById("introduccion").innerHTML="hola don pepito");//Cambia el contenido del apartado con id introduccion

console.log(document.getElementsByTagName("header")[0].outerHTML);//Tmb incluira el elemento que se ha seleccionado

document.getElementsByTagName("header")[0].innerHTML = "Hola que tal";//Cambia todo lo que hay dentro del header
document.getElementsByTagName("header")[0].outerHTML  = "Hola que tal"; //Cambia todo y tmb la etiqueta header


let imagenes = Array.from(document.getElementsByTagName("img"));
//Cambiar todas las imagenes y tmb el alt
imagenes.forEach(imagen =>{
    setTimeout(()=>{
        imagen.alt="Esto es un texto cualquiera";
        imagen.src = "img/dados.png";
    }, 3000);
});



//inerTEXT outerTEXT, no interpreta las etiquetas como html, lo mismo pasa con las etiquetas padres como en las anteriores
console.log(document.getElementsByTagName("header")[0].innerText);
document.getElementsByTagName("header")[0].innerText = "<strong>hola</strong>";

console.log(document.getElementsByTagName("header")[0].outerText);
document.getElementsByTagName("header")[0].outerText = "<strong>hola</strong>";



//textContent parecido a inerText
console.log(document.getElementsByTagName("header")[0].textContent);
document.getElementsByTagName("header")[0].textContent = "<strong>hola</strong>";




//Propiedad no estandar cambiar propiedades
document.getElementsByTagName("header")[0].fecha="hola";//No lo cambia

//hasAttributes devuelve si tiene atributos o no
let cabecera = document.getElementsByTagName("header")[0];
console.log(cabecera.hasAttributes());

//hasAttribute lo mismo que el anterior
console.log(cabecera.hasAttribute("fecha"));

//setAttribute
cabecera.setAttribute("fecha", "23/06/2024");//cambia el atributo


//getAttibute obtiene el valor atributo

cabecera.getAttribute("fecha");

//removeAttibute borra un atributo
cabecera.removeAttribute("fecha");

//getAttributeNames, devuelve el nombre del atributo
cabecera.getAttributeNames();


//Clases
let selecciona = document.querySelector("section:first-of-type");
console.log(selecciona.classList);//devuelve las clases que tiene dentro el articulo seleccionado
for (let clase of selecciona.classList) {
    console.log(clase);
}

selecciona.classList.value; //Devuelve los valores como string
console.log(selecciona.classList.contains("img"));//Comprueba si en el elemento existe el elemento img
console.log(selecciona.classList.item(selecciona.classList.length - 1));//Devuelve la ultima clase

selecciona.classList.add("nueva_clase");//Añade una clase al elemento
selecciona.classList.replace("nueva_clase", "mas_nueva_aun");//Reemplaza una clase por otra
selecciona.classList.remove("mas_nueva_aun");//Borra la clase

selecciona.classList.toggle("borde_rojo");//Si la clase existe la borra, si no existe la crea


//Atributos booleanos
let elemento = document.querySelector("form:nth-child(2)");
elemento.toggleAttribute("disabled");//si existe lo quita, si no existe lo crea



//crear elementos
let seccion = document.createElement("section");
let parrafo = document.createElement("p");
let comentario = document.createComment("Esto es un comentario absurdo");
let texto = document.createTextNode("un texto aleatorio"); //crea solo texto sin etiqueta

//insertar elemento
seccion.appendChild(comentario);
parrafo.appendChild(texto);
seccion.appendChild(parrafo);
//document.querySelector("body").appendChild(seccion);


//clonar
let seccion2 = seccion.cloneNode(true);//tiene que estar en true para que copie todo
let comentario2 = document.createComment("Otro comentario");
seccion.appendChild(comentario2);
document.body.appendChild(seccion2);
console.log(seccion2.isConnected);//Indica si la seccion 2 esta incluida en el body


//Crear una estructura temporal
let estructura = document.createDocumentFragment();
estructura.appendChild(seccion);
document.body.appendChild(estructura);

//quitar
let padre = document.querySelector("section")
let borrar = document.body.querySelector("section:p");
//borrar.remove();
console.log(borrar.isConnected);
padre.removeChild(borrar);
console.log(borrar.isConnected);

//reemplazar
let sustituto = document.body.querySelector("h1");
let padre2 = document.querySelector("section:last-of-type");
let sustituido = document.body.querySelector("section:last-of-type:p");
padre2.replaceChild(sustituto, sustituido);



//insertBefore
let seccion = document.createElement("section");
let parrafo = document.createElement("p");
let comentario = document.createComment("Esto es un comentario absurdo");
let texto = document.createTextNode("un texto aleatorio"); //crea solo texto sin etiqueta
seccion.appendChild(comentario);
parrafo.appendChild(texto);
seccion.appendChild(parrafo);
let estructura = document.createDocumentFragment();
estructura.appendChild(seccion);
//document.body.appendChild(estructura);

let padre = document.body.querySelector("section");
let punto_insercion = document.body.querySelector("section form");
//padre.insertBefore(estructura, punto_insercion);

//before, after
//punto_insercion.before(estructura);
//punto_insercion.after(estructura);


let punto_insercion2 = document.body.querySelector("form label:last-of-type");
let boton = document.createElement("button");
boton.textContent = "enviar";
punto_insercion2.after(boton);


//append, prepend
let lista = document.body.querySelector("ul");
let elemento = document.createElement("li");
let fruta = document.createTextNode("manzana");
elemento.append(fruta);

lista.append(elemento);
lista.prepend(elemento);


//replaceWith, replaceWithChildren
let tmp = document.createDocumentFragment();
let seccion = document.getElementById("sec-imagenes");
let aux1 = document.createElement("section");
let aux2 = document.createComment("comentario sin sentido");
let aux3 = document.createElement("p");
aux1.appendChild(aux2);
aux1.appendChild(aux3);
tmp.appendChild(aux1);

seccion.replaceChild(tmp);

//insertAdjacentElement, insertAdjacentHTML, insertAdjacentText
let origen = document.querySelector("#aleatorio");
let aux = document.createElement("p");
aux.textContent = "Un texto aleatorio";
//beforeBeging, afterBeginf, beferoBeging, beforeend
//origen.insertAdjacentElement("beforebegin", aux);
//origen.insertAdjacentElement("afterbegin", aux);
origen.insertAdjacentElement("beforeend", aux);
origen.insertAdjacentElement("afterend", aux);




//MOVERSE POR EL DOM
let origen = document.querySelector("#aleatorio");
console.log(origen.children);
console.log(origen.children.length);
console.log(origen.children[1]);


console.log(origen.parentElement);
origen.parentElement.textContent="Hola don pepito";

console.log(origen.firstElementChild);
origen.firstElementChild.alt="Otro texto sin sentido";

console.log(origen.lastElementChild);

console.log(origen.nextElementSibling);//el siguiente hermano de tipo elemento
console.log(origen.previousElementSibling);


//NODOS
console.log(origen.childNodes)//todos los hijos de cualquier tipo
console.log(origen.firstChild);
console.log(origen.lastChild);
console.log(origen.nextSibling);//siguiente hermano
console.log(origen.last);



//EVENTOS
//manejador de eventos: event listener
function saludar() {
    console.log("Holaaaaaaaaaaaaa");
}

let despedida = document.getElementById("boton2");

despedida.onclick = function (){
    console.log("Me despido");
}

function llamar() {
    console.log("riiiiiiiiing");
}
let boton = document.getElementById("boton3");
boton.addEventListener("click", llamar);
boton.addEventListener("click", saludar);

document.addEventListener("click", evento=>{
    if(evento.target.matches("p")){
        console.log("has pinchado en un parrafo");
    }
})


const nuevoParrafo = document.createElement("p");
const nuevoTexto = document.createTextNode("otro parrafo mas");
nuevoParrafo.appendChild(nuevoTexto);
document.body.insertAdjacentElement("beforeend",nuevoParrafo);

let estilos = document.createElement("link");
estilos.rel="stylesheet";
estilos.href="pruebas.css";

document.head.insertAdjacentElement("beforeend", estilos);
let boton2 = document.getElementById("propiedades");
boton2.addEventListener("click", evento=>{
    let parrafo = document.getElementById("info_extra");
    parrafo.classList.remove("dp_none");
    parrafo.innerHTML = "El boton: " + evento.button + "ha sido pulsado";
    parrafo.innerHTML += "<br> Type of Event: " + evento.type;
    parrafo.innerHTML += "<br>" +  evento.timeStamp;
    parrafo.innerHTML += "<br> X-Coordinate " + evento.clientX + "and Y-Coordinate " + evento.clientY;
    (evento.isTrusted ? console.log("its has been launched by web browser"): console.log("its has been launched by user"));

    if(evento.altKey){
        parrafo.innerHTML += "<br> You have presed alt key";
    }

    if(evento.ctrlKey){
        parrafo.innerHTML += "<br> You have presed ctrl key";
    }

    if(evento.shiftKeyKey){
        parrafo.innerHTML += "<br> You have presed shift key";
    }

    if(evento.metaKey){
        parrafo.innerHTML += "<br> You have presed meta key";
    }
});

let cambiante = document.getElementById("cambiar");

cambiante.addEventListener("click", evento=>{
    if (evento.ctrlKey) {
        cambiante.classList.toggle("fondo_rojo");
    }
})

//añadir eventlistener con clases
class EvenManager{
    constructor(elemento){
        elemento.addEventListener("click", () => this.saludar());
    }

    saludar(){
        console.log("Hola buenas tardes");
    }
}

let boton4 = document.getElementById("boton4");
const instancia = new EvenManager(boton4);

class Manejador{
    handleEvent(event){
        this[event.type](event);
    }

    mouseup(){
        boton4.innerHTML = "evento mouseup";
    }

    mousedown(){
        boton4.innerHTML = "evento mousedown";
    }
}

const instancia2 = new Manejador();
boton4.addEventListener("mouseup", instancia2);
boton4.addEventListener("mousedown", instancia2);

class Manejador2{
    constructor(elemento){
        elemento.onclick = this.onclick.bind(this);
    }

    buscar(){
        console.log("He pinchado en buscar");
    }

    enviar(){
        console.log("He pinchado en enviar");
    }

    borrar(){
        console.log("He pinchado en borrar");
    }

    onclick(event){
        this[event.target.dataset.accion]();
    }
}

new Manejador2(document.getElementById("tres_botones"));

//Eliminar eventos


//Propagar eventos
let seccion = document.querySelector("section:last-of-type");
let articulo = seccion.querySelector("article");
let parrafo = articulo.querySelector("p");

seccion.addEventListener("click", (evento) =>{
    console.log("estoy en " + evento.currentTarget.tagName + "y el evento que se lanza es " + evento.target.tagName);
});

articulo.addEventListener("click", (evento) =>{
    console.log("estoy en " + evento.currentTarget.tagName + "y el evento que se lanza es " + evento.target.tagName);
});

parrafo.addEventListener("click", (evento) =>{
    console.log("estoy en " + evento.currentTarget.tagName + "y el evento que se lanza es " + evento.target.tagName);
});

for (const elemento of document.querySelectorAll("*")) {
    elemento.addEventListener("click", (evento) =>{
        console.log(evento.currentTarget.tagName + "lanzado por: " + evento.target.tagName);
    });

    elemento.addEventListener("click", (evento) =>{
        console.log(evento.currentTarget.tagName + "lanzado por: " + evento.target.tagName);
    }, {capture:true}, {one:true});
};



//parar la profresion
let objetivo = document.querySelector("section:nth-child(2) p");
objetivo.addEventListener("click", (evento) =>{
    console.log("Parando la propagacion en " + evento.currentTarget.tagName);
    evento.stopPropagation();
});

//DELEGACION EVENTOS
objetivo = document.querySelector("table");

objetivo.addEventListener("click", (evento) =>{
    let celda = evento.target.closest("td");
    celda.classList.toggle("destacado");
})


//MAS EVENTOS
objetivo = document.getElementById("tabla2");

objetivo.addEventListener("mouseover", (evento) =>{
    evento.target.style.background="red";
});

objetivo.addEventListener("mousedown", (evento) =>{
    evento.target.style.background="";
});
*/
//Pointer
let objetivo_up = document.getElementById("evento_up");

objetivo_up.addEventListener("pointerup", (evento) =>{
    objetivo_up.innerHTML+="<br>Evento " + evento.type+ " pointer ID " + evento.pointerId + " isPrimary: " + evento.isPrimary;
    objetivo_up.scrollTo(0, objetivo_up.scrollHeight);

});

let objetivo_down = document.getElementById("evento_down");
objetivo_down.addEventListener("pointerdown", (evento) =>{
    objetivo_down.innerHTML+="<br>Evento "+evento.type + " pointer ID " + evento.pointerId + " isPrimary: " + evento.isPrimary;
    objetivo_down.scrollTo(0, objetivo_move.scrollHeight);
});

let objetivo_move = document.getElementById("evento_move");
objetivo_move.addEventListener("pointermove", (evento) =>{
    objetivo_move.innerHTML+="<br>Evento "+evento.type + " pointer ID " + evento.pointerId + " isPrimary: " + evento.isPrimary + " Coodenadadas X " + evento.clientX +" Coordenadas Y " + evento.clientY;
    objetivo_move.scrollTo(0, objetivo_move.scrollHeight);
});

//Teclado
objetivo= document.getElementById("entrada_texto");
objetivo_up.addEventListener("keyup", (evento) =>{
    let objetivo_texto_up = document.getElementById("evento_teclado_up");
    objetivo_texto_up.innerHTML+="<br> Event: "+  evento.type + " phisical key code " + evento.code + " character " + evento.key;
    objetivo_texto_up.scrollTo(0, objetivo_texto_up.scrollHeight);
});

objetivo.addEventListener("keydown", (evento) =>{
    let objetivo_texto_down = document.getElementById("evento_teclado_dow");
    objetivo_texto_down.innerHTML+="<br> Event: "+  evento.type + " phisical key code " + evento.code + " character " + evento.key;
    objetivo_texto_down.scrollTo(0, objetivo_texto_down.scrollHeight);
});

//Desplazamiento
objetivo = document.getElementById("caja_absoluta");
window.addEventListener("scroll", ()=>{
    objetivo.innerHTML=window.scrollY +" px";
});

//form
let formulario = document.querySelector("form[name=form1]");
//focusin focusout bubbling 
formulario.addEventListener("focusin", consola);
formulario.addEventListener("focusout", consola);
formulario.addEventListener("input", consola);
formulario.addEventListener("change", consola);
formulario.addEventListener("cut", noPermitido);
formulario.addEventListener("copy", noPermitido);
formulario.addEventListener("paste", noPermitido);


function consola(evento){
    console.log("<br> evento of type " + evento.type + " capturado en: " + evento.target.name);
    if(evento.type=="focusin"){
        evento.target.classList.add("borde_rojo");
    }else{
        evento.target.classList.remove("borde_rojo");
    }

    if(evento.target.name == "nombre" && evento.target.value!="pepe"){
        evento.target.focus();
    }
}

function noPermitido(evento){
    evento.preventDefault();
    alert(evento.type + " No esta permitido");
    consola(evento);
}

//Toda la pagina
//DOMContentLoaded, load, beforeunload, unload
window.addEventListener("DOMContentLoaded", consola2);
window.addEventListener("load", consola2);

function consola2(evento){
    console.log("evento of type " + evento.type + " at timeStamp " + evento.timeStamp + " ms");
};

























