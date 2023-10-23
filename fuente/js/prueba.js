  /*
  console.log("Esto es unn mensaje de prueba");
  let numero = 5;

  let numero2 = 6;
  let numero3 = 7;
  const ROJO = "#FF000"; // constante cuyo valor se sabe de antemano
  const azul = ""; //Constante que aun no se sabe que valor tendra

  console.log(numero3);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  "use strict";//Modo estricto

  numero3 = 6.2;
  numero1 = 2;
  let userName = "vestrollal";
  let objeto = {nombre:"Alex", apellidos:"Samos"}; //objeto
  let array = ["rojo","verde","azul"];
  let cadena = true;
  //Undefined: no se le da valor a una variable
  //Null NO EXISTE LA VARIABLE
  console.log(`La variable username vale $(userName)`);``
  console.log(objeto.nombre);
  console.log(array[2]);
  console.log(z);
  console.log(typeof(cadena));

  //Conversion

  "use strict";

  let cadena2 = true;
  console.log(typeof(cadena2));

  cadena2 = 4;
  console.log(typeof(cadena2));

  cadena2 = "Hola queridos alumnos";
  console.log(typeof(cadena2));

  cadena2 = String(5);
  console.log(typeof(cadena2));

  console.log("4"/"2");

  let a = "3"

  let c = Number(a);

  let booleano = Boolean(undefined);
  console.log(booleano);


  //Operaciones con cadenas de caracteres
  //se concatena con+

  //Operaciones con numeros
  let n1 = 3;
  let n2 = 4;

  console.log(4%3);//resto
  console.log(14**2);//potencia
  console.log(-n2);//invierte el signo
  console.log(3*(10+2));//Preferecnia de operadores a no ser que se ponga parentesis
  console.log(a++);//primero mostras despues incrementar
  console.log(++a); //primero incrementar despues mostrar

  //COMPARACION 
  /*
  let cadena1 = "hola";
  let cadena2 = "adios";
  let cadena3 = "HOLA";

  let a = 5;
  let b = 7;
  let c = 2;
  let d = 2;

  console.log(a>b, c<b, c==d, a!=b);
  console.log(cadena1<cadena2);
  console.log('4'>cadena1); 
  console.log(0==false);
  console.log(""==false);
  */
  /*
  if(a == 5){
      a++;
    }else{
      if(a == 6){
        a-=3;
      }else{
        a--;  
      }
    }
    
    (a == 5)? a++:(a == 6)? a-=3 :a--;

  //operadores logicos

  //OR ||
  console.log(a || b)

  //AND &&
  console.log(a && c);

  //?? devuelve el primer valor que no es nulo puede ser 0
  console.log(a ?? 160);

  let identificarse = prompt("Quien eres?:");


  if (identificarse == "Admin") {
    let password = prompt("Contraseña: ");
    if(password == "1234adcs"){
      alert("Hello");
    }else if(password != "1234adcs"){
      alert("Wrong password");
    }else{
      alert("Cancelar");
    }
  } else if(identificarse == " " || identificarse == null) {
    alert("Canceled");
  }else{
    alert("I dont know you");
  }

  //Bucles 

  let i = 4;

  while(i>0){
    i--;
    console.log("i vale: " .i)
  }

  do{
  i--; 
  console.log("i vale: " .i)
  }while(i>0);

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  for(;;) console.log("hola"); //Bucle infinito 

  let num = 23
  let array;
  for(let i = 0; i<num; i++){
      if(num%2 == 0){
          array.push(i);
      }

      if(array.length > 2){
        console.log(`El numero {num} no es primo`);
      }else{
        console.log(`El numero {num} es primo`);
      }
  }
  //Funciones
  //variables 
  //funcion como declaracion
  let var1 = "texto";
  function ejemplo() {
    console.log(var1);
  }

  (edad >= 18)? console.log("Mayor de edad"): console.log("Menor de edad");

  //Esta funcion no se puede usar antes de definirla (como expresion)
  let saludo = function(quien){
    return `hola ${quien}`;
  }
  console.log(saludo("felipe"));

  let saludo;
  let despedida;
  if (1) {
    saludo = function(quien){
      return `hola ${quien}`;
    };
  }else{
    despedida = function(quien){
      return `adios ${quien}`;
    };
  }

  console.log(saludo("Felipe"));

  //Funciones de flecha
  let suma = (a,b) => (a+b);

  let saluda= (quien) => `hola, ${quien}`;
  let edad = 16;
  let irAlaCarcel = (edad<18) ? 
    () => console.log("no va a la carcel") : 
    () => console.log("vas a la carcel");







  let billion = 1e12;
  let microsg = 1e-6;
  let decimal = 15;
  let binario = 0b111;
  let octal = 0o17;
  let hexadecimal = 0xf;
  //2 formas de pasar a String, el metodo tpString no se puede hacer con valores nulos
  String(decimal) == decimal.toString();

  let real = 3.12;
  let real2 = 3.6;

  Math.floor(real);//redondea hacia abajo
  Math.ceil(real2);//Redondea hacia arriba
  Math.round(real);//Redondea al numero mas cercano
  Math.trunc(real2);//Le quita los decimales

  let numeroDescomunal = 1e500;

  suma.toFixed(1);//Redondea a la cantidad de 0 que se le endique

  //Infinity, -Infinity, NaN

  isNaN(real);//Indica si lo que se le pasa como parametro no es un numero

  Number.isNaN(real);//Lo mismo que la anterior pero no convierte a numero solo comprueba

  isFinite(real);//Comprueba si el numero es finito;
  Number.isFinite(real); //Lo mismo pero no convierte a numero solo comprueba;

  let tamayo = "100px";
  let tamayo2= "10rem";

  parseInt(tamayo);//Se queda con el numero
  parseFloat(tamayo2);//Se queda con el tamaño como numero real

  Math.random();//Random entre 0 y 1 sin contar el 1

  //Math.max()
  //Math.min()
  //Math.pow()

  //CADENAS

  let lista = 'huevos leche yogur';
  let caden4 = "HOLA \"amados\" \"AMADOS\" \\ALUMNOS amados";

  for (let letra of caden4){
    console.log(letra);
  }

  caden4.toLowerCase();
  caden4.toLocaleUpperCase();

  caden4.indexOf("amados");//Busca la primera coincidencia solo y te dice donde empieza

  caden4.lastIndexOf("amados");//Lo mismo que lo anterior pero busca la ultima, si no encuentra da -1

  caden4.includes("ama");//Saber si hay una palabra, aunque forme parte de otra palabra

  caden4.startsWith("HOLA");//indica si la caden4 empieza con la palabra

  caden4.endsWith("AMADOS");//Lo mismo pero si acaba

  caden4.slice(10); //Separa la cadena por la posicion que se le diga

  caden4.slice(10 ,15);

  caden4.slice(-10); //Desde la decima posiocion hasta el final

  caden4.split(" ");//Igual que en java

  caden4.localeCompare("jshajshasjhas")//Comparar cadenas letra a letra

  // ARRAYS

  let matriz = new Array();
  let matrizFrutas= ["manzana", "piña", "pera"];
  let matrizComida = [
    ["paella", "huevos rotos"],
    ["risoto", "ratatuille", "fish and fish"],
  ];

  let funcion = (elemento, indice) => console.log(elemento);
  matrizFrutas.forEach(funcion);

  matrizFrutas.forEach(fila=>{
    fila.forEach(i => {
      console.log(i);
    });
  });

  let funcion2 = (elemento) => {
    for(let subelemento of elemento){
      console.log(subelemento);
    }
  }

  matrizComida.forEach(funcion2);

  for(let comida of matrizComida){
    for(let elemento of comida){
        console.log(elemento);
    }
  }

  matrizComida.length;//saber tamaño



  let biArray = [
    ["Hola", "Adios", "hasta luego"],
    ["Hi", "goodbye", "see you soon"],
    ["bonjour", "bonsoir"]
  ];

  //Queue

  biArray.shift();//Saca el primer elemento y lo muestra
  biArray.push();//Inserta un elemento al inicio del array y muestra la nueva longitud

  //Pila/stack

  biArray.pop();//Saca el ultimo elemento del array y lo muestra
  biArray.push();//Inserta un elemento al final del array y muestra la nueva longitud

  //Convertir la matriz a string
  biArray.toString();

  biArray[1].slice(1,2);//Igual que en los string extrae la posicion indicada sin contar con la ultima puesta deja la matriz original sin modificar

  biArray.splice(1,2, "pera", "kiwi");//Devuelve el elemento pero lo elimina de la matriz original y puede reemplazar y añadir

  biArray[1].concat("hola");//No modifica el original

  biArray[0].indexOf("hola");//muestra la pocion de la palabra que encuentra, si existe mas de 1 te devuelve el primero que encuentra

  biArray[0].includes("hola");//devueve true o false si el elemento esta dentro

  biArray[0].lastIndexOf("hola"); //Igual que index pero devuelve el ultimo



  let almacen = [ //matriz de objetos
    {nombre: "manzana", existencias: 0},
    {nombre: "melon", existencias: 3},
    {nombre: "uva", existencias: 4},
    {nombre: "pera", existencias: 6},
  ];



  almacen.findIndex(elemento=>elemento.nombre=="pera");//Indica la posicion en la que esta el elemento cuyo nombre concuerde

  let objeto =almacen.find(elemento=>elemento.nombre=="pera");//Devuelve toda la fila
  console.log(objeto.existencias);//Devuelve las existencias del objeto pera


  almacen.filter(elemento=>elemento.existencias>4);//Devuekve un elemento que cumple con los requisitos
  almacen.filter(elemento=>(elemento.nombre=="manzana") && (elemento.existencias>4));

  let numeros =[5,1,2,11,22];

  numeros.map(elemento=>elemento*2)//Devuelve el resultado de la operacion de los elementos de una matriz, multiplica por 2 cada elemento

  let razasPerro=["salchicha", "chuhuahua", "beagle", "galgo"];
  console.log(razasPerro.map(elemento=>"Perro "+elemento));//Añade la palabra perro


  let numeros = [1,2,3,4,5];
  let fruta = ["manzana", "pera"];
  let razasAnimales=[
    {animal : "perro", raza: "chihuahua"},
    {animal : "perro", raza: "galgo"},
    {animal : "gato", raza: "siames"},
    {animal : "gato", raza: "egipcio"},
  ];

  let arr1 = new Array(razasAnimales.filter(elemento=>(elemento.animal == "perro")));
  let arr2 = new Array(razasAnimales.filter(elemento=>(elemento.animal == "gato")));
  console.log(arr1);
  console.log(arr2);

  let arr3 = new Array(razasAnimales.filter(elemento=>(elemento.startsWith("gato")))); // sacar cuando no son objetos

  numeros.reduce((acumulado, actual) => acumulado+=actual);//Hace la operacion y devuelve un valor
  let frase = "Helado de" + fruta.reduce((acumulado, actual) => acumulado + " " + actual);


  numeros.join();//Une en un solo string un array

  numeros.sort((a,b) => a-b)//ordenar un array, modifica el array original
  //<0 si a<b, 0 si a==b, >0 si b>a
  function ordenarNumeros(a,b) {
    let aux = (a<b) ?  -1 : 
      (a==b) ?  0 :  1; 
    return aux;
  }

  let ordenarNumeros2 = (a,b) =>{
      let aux = (a<b) ?  -1 : 
        (a==b) ?  0 :  1; 
      return aux;
  }

  let ordenar = (a,b)=>a-b;



  numeros.reverse();//Le da la vuelta al array

  //Comparar matrices

  //Con == compara si son el mismo objeto no el contenido
  Array.isArray(razasAnimales);//Devuelve true si es una matriz y false si es un objeto

  //Copiar una matriz en otra
  let razasAnimales2 = Array.from(razasAnimales);


  //Recursividad-----------------------------------------------------------------
  function potencia(x,n) {
    let potencia = 1;
    for (let i = 0; i < n; i++) {
      potencia *= x;
    }
    return potencia;
  }

  function potenciaRecursiva(x,n) {
    if (n == 1) {
      return x;
    }else{
      return (x * potenciaRecursiva(x,n-1));
    }
  
  }
  console.log(potenciaRecursiva(2,5));

  let num = parseInt(prompt("Introduce un numero: "));

  */

  let numero = parseInt(prompt("Introduce un numero: "));
  
  console.log("-----Menu--------")
  console.log("Opcion 1 pintar un diamante");
  console.log("Opcion 2 pintar un cuadrado");
  console.log("Opcion 3 pintar una piramide");
  let opcion = parseInt(prompt("Elige una opcion: "));




  switch (opcion) {
  case 1:
    let diamante = '';

    for (let i = 0; i <= numero; i++) {
      for (let j = numero - i; j > 0; j--) {
        diamante += ' ';
      }
      diamante += '*';
      if (i > 0) {
        for (let k = 1; k <= 2 * i - 1; k++) {
          diamante += ' ';
        }
        diamante += '*';
      }
      diamante += '\n';
    }
  
    for (let i = numero - 1; i >= 0; i--) {
      for (let j = numero - i; j > 0; j--) {
        diamante += ' ';
      }
      diamante += '*';
      if (i > 0) {
        for (let k = 1; k <= 2 * i - 1; k++) {
          diamante += ' ';
        }
        diamante += '*';
      }
      diamante += '\n';
    }
  console.log(diamante);
    break;
    case 2:
      let cuadrado = "";
      for (let  i = 1 ; i <= numero; i++) {
        for (let j = 1; j <= numero; j++) {
        if (i == 1 || i == numero || j == 1 || j == numero) {
          cuadrado += "*";
        }else{
          cuadrado+= " ";
        }  
        }
        cuadrado += "\n";
      }
      console.log(cuadrado);
      break;

    case 3:
      let triangulo = '';
      for (let i = 1; i <= numero; i++) {
          for (let j = 1; j <= numero - i; j++) {
            triangulo += ' ';
          }
          for (let k = 1; k <= 2 * i - 1; k++) {
            if (i === 1 || i === numero || k === 1 || k === 2 * i - 1) {
              triangulo += '*';
            } else {
              triangulo += ' ';
            }
          }
          triangulo += '\n';
        }
      console.log(triangulo);
      break;




    default:
      console.log("Opcion no valida");
      break;
  }
