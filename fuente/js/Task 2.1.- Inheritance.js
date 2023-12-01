// EJER1
let criatura = {
  familia: "",
  numeroPatas: 0,
  seMueve: "",
};

let gatoEjemplo = {};
let aranaEjemplo = {};
let conejoEjemplo = {};

Object.setPrototypeOf(gatoEjemplo, criatura);
Object.setPrototypeOf(aranaEjemplo, criatura);
Object.setPrototypeOf(conejoEjemplo, criatura);

gatoEjemplo.familia = "felino";
gatoEjemplo.numeroPatas = 4;
gatoEjemplo.seMueve = "andando";

aranaEjemplo.familia = "aracnidos";
aranaEjemplo.numeroPatas = 8;
aranaEjemplo.seMueve = "trepan";

conejoEjemplo.familia = "leporidos";
conejoEjemplo.numeroPatas = 4;
conejoEjemplo.seMueve = "saltando";

for (let valor in conejoEjemplo) {
  console.log(valor + ": " + conejoEjemplo[valor]);
}

for (let valor in aranaEjemplo) {
  console.log(valor + ": " + aranaEjemplo[valor]);
}

for (let valor in gatoEjemplo) {
  console.log(valor + ": " + gatoEjemplo[valor]);
}

// EJER2
let individuo = {
  bolsillo: 0,
  listaTareas: [],
  cobraSueldo(dinero) {
    this.bolsillo = dinero;
  },
  anyadeTarea(tarea) {
    if (this.listaTareas.length === 0) {
      this.listaTareas = [];
    }
    this.listaTareas.push(tarea);
  },
};

let desarrollador = {};
let conserje = {};

Object.setPrototypeOf(desarrollador, individuo);
Object.setPrototypeOf(conserje, individuo);

desarrollador.cobraSueldo(3000);
desarrollador.anyadeTarea("Programa en JavaScript");
console.log(desarrollador.bolsillo);
console.log(desarrollador.listaTareas);

conserje.cobraSueldo(1500);
conserje.anyadeTarea("Organizar grupos de trabajo");
console.log(conserje.bolsillo);
console.log(conserje.listaTareas);

// EJER3
let personaEjemplo = {
  bolsillo: 0,
  listaTareas: [],
  cobraSueldo(dinero) {
    this.bolsillo = dinero;
  },
  anyadeTarea(tarea) {
    if (this.listaTareas.length === 0) {
      this.listaTareas = [];
    }
    this.listaTareas.push(tarea);
  },
  quitarTarea(tarea) {
    for (let i = 0; i < this.listaTareas.length; i++) {
      if (tarea === this.listaTareas[i]) {
        this.listaTareas.splice(i, 1);
      }
    }
  },
};

let informaticoEjemplo = {};
let ordenanzaEjemplo = {};

Object.setPrototypeOf(informaticoEjemplo, personaEjemplo);
Object.setPrototypeOf(ordenanzaEjemplo, personaEjemplo);

informaticoEjemplo.cobraSueldo(3000);
informaticoEjemplo.anyadeTarea("Programa en JavaScript");
informaticoEjemplo.anyadeTarea("Suma.js");
console.log(informaticoEjemplo.bolsillo);
console.log(informaticoEjemplo.listaTareas);
informaticoEjemplo.quitarTarea("Suma.js");
console.log(informaticoEjemplo.listaTareas);

ordenanzaEjemplo.cobraSueldo(1500);
ordenanzaEjemplo.anyadeTarea("Organizar grupos de trabajo");
console.log(ordenanzaEjemplo.bolsillo);
console.log(ordenanzaEjemplo.listaTareas);

// EJER4
let vehiculo = {
  tipo: "",
  numeroRuedas: 0,
  tipoMotor: "",
  velocidad: 0,
  kilometros: 0,
  acelerar(velocidad) {
    this.velocidad += velocidad;
  },
  parar(velocidad) {
    this.velocidad -= velocidad;
  },
  frenar() {
    this.velocidad = 0;
  },
  añadirVelocidad(nuevaVelocidad) {
    this.velocidad = nuevaVelocidad;
  },
  kilometrosActuales(nuevoKm) {
    this.kilometros = nuevoKm;
  },
};

let motoYamaha = {};
let cocheCupra = {};

Object.setPrototypeOf(motoYamaha, vehiculo);
Object.setPrototypeOf(cocheCupra, vehiculo);

motoYamaha.tipo = "Moto";
motoYamaha.numeroRuedas = 2;
motoYamaha.tipoMotor = "890 cc";
motoYamaha.añadirVelocidad(60);
motoYamaha.kilometrosActuales(20000);
console.log(motoYamaha.velocidad);
console.log(motoYamaha.kilometros);
motoYamaha.acelerar(20);
console.log(motoYamaha.velocidad);
motoYamaha.parar(10);
console.log(motoYamaha.velocidad);
motoYamaha.frenar();
console.log(motoYamaha.velocidad);

cocheCupra.tipo = "Coche";
cocheCupra.numeroRuedas = 4;
cocheCupra.tipoMotor = "350 cc";
cocheCupra.añadirVelocidad(80);
cocheCupra.kilometrosActuales(15000);
console.log(cocheCupra.velocidad);
console.log(cocheCupra.kilometros);
cocheCupra.acelerar(20);
console.log(cocheCupra.velocidad);
cocheCupra.parar(10);
console.log(cocheCupra.velocidad);
cocheCupra.frenar();
console.log(cocheCupra.velocidad);

// Ejer5
let serViviente = {
  nombre: "",
  alimentarse() {
    console.log(`El ${this.nombre} se está alimentando.`);
  },
  dormir() {
    console.log(`El ${this.nombre} está durmiendo.`);
  },
};

let criaturaViviente = {
  cantidadPatas: "",
  especieAnimal: "",
  seAlimenta(comida) {
    console.log(`El ${this.nombre} se alimenta de ${comida}`);
  },
};

Object.setPrototypeOf(criaturaViviente, serViviente);

let perroPastor = {};

Object.setPrototypeOf(perroPastor, criaturaViviente);

perroPastor.nombre = "Pastor Belga";
perroPastor.especieAnimal = "Canidos";
perroPastor.seAlimenta("comida seca");
perroPastor.alimentarse();
perroPastor
