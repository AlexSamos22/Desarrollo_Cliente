// ejer1
let usuario = {};
usuario.nombre = "Jhon";
usuario.apellido = "Smith";
usuario.nombre = "Pete";
delete usuario.nombre;

let objeto = {};
function estaVacio(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(estaVacio(objeto));

// ejer2
let salarios = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sumaSalarios = Object.values(salarios).reduce((total, salario) => total + salario, 0);
salarios.suma = sumaSalarios;
console.log(salarios);

// ejer3
let salarios2 = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function multiplicarNumericos(obj) {
  let resultado = {};
  for (let key in obj) {
    resultado[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key];
  }
  return resultado;
}
let nuevosSalarios = multiplicarNumericos(salarios2);
console.log(nuevosSalarios);

// ejer5
let calculadora = {
  a: 0,
  b: 0,
  leer: function() {
    this.a = parseInt(prompt('Inserta el primer número: ')) || 0;
    this.b = parseInt(prompt('Inserta el segundo número: ')) || 0;
  },
  suma() {
    return this.a + this.b;
  },
  multiplicacion() {
    return this.a * this.b;
  }
};

calculadora.leer();
console.log(calculadora.suma());
console.log(calculadora.multiplicacion());

// ejer6
let frutas = {
  "manzanas golden": 25,
  "manzanas fuji": 20,
  "pera conferencia": 17,
  "pera ercolina": 12
};

function calcularTotalKilos(frutas) {
  let totalKilos = 0;
  for (let key in frutas) {
    totalKilos += frutas[key];
  }
  return totalKilos;
}

console.log(calcularTotalKilos(frutas));

// ejer7
function calcularKilosPorTipo(frutas) {
  let kilosPorTipo = {
    manzanas: 0,
    peras: 0
  };

  for (let key in frutas) {
    if (key.startsWith("manzana")) {
      kilosPorTipo.manzanas += frutas[key];
    } else if (key.startsWith("pera")) {
      kilosPorTipo.peras += frutas[key];
    }
  }
  return kilosPorTipo;
}

let frutas3 = {
  "manzanas golden": 25,
  "manzanas fuji": 20,
  "pera conferencia": 17,
  "pera ercolina": 12
};

let resultado = calcularKilosPorTipo(frutas3);
console.log(resultado);

// ejer8
let escalera = {
  paso: 0,
  subir() {
    this.paso++;
    return this;
  },
  bajar() {
    this.paso--;
    return this;
  },
  mostrarPaso() {
    console.log(this.paso);
    return this;
  }
};

escalera.subir().subir().bajar().mostrarPaso().bajar().mostrarPaso();

// ejer9
let frutas4 = {
  nombre: "manzana",
  kilos: 200,
  vender() {
    let cantidadVenta = parseInt(prompt("¿Cuántos kilos deseas comprar?")) || 0;

    if (cantidadVenta > this.kilos) {
      console.log("No hay suficientes kilos.");
    } else {
      console.log("Venta realizada.");
      this.kilos -= cantidadVenta;
    }
  },
  comprar() {
    let cantidadCompra = parseInt(prompt("¿Cuántos kilos se han comprado?")) || 0;

    if (cantidadCompra === 0) {
      console.log("No se ha comprado nada.");
    } else {
      console.log("Compra realizada.");
      this.kilos += cantidadCompra;
    }
  },
  fechaAgotado() {
    return true;
  },
  fechaCompra() {
    return true;
  }
};

console.log(frutas4.kilos);
frutas4.vender();
console.log(frutas4.kilos);
frutas4.comprar();
console.log(frutas4.kilos);
frutas4.fechaCompra();
frutas4.fechaAgotado();

// ejer10
let piezasCoche = {
  pieza1: {
    nombre: "Motor",
    cantidad: 100
  },
  pieza2: {
    nombre: "Filtro de aceite",
    cantidad: 150
  },
  pieza3: {
    nombre: "Amortiguador",
    cantidad: 200
  },
  pieza4: {
    nombre: "Filtro de aire",
    cantidad: 120
  },
  sumarCantidadPiezas() {
    let suma = 0;
    for (let key in this) {
      if (this[key].cantidad) {
        suma += this[key].cantidad;
      }
    }
    return suma;
  }
};

console.log(piezasCoche.sumarCantidadPiezas());

// ejer11
function crearUsuario(nombre, direccion, altura, anchura) {
  let usuario = {
    user: {
      nombre: nombre,
      direccion: direccion,
      dimensiones: {
        altura: altura,
        anchura: anchura
      }
    }
  };
  return usuario;
}

let usuario11 = crearUsuario("usuario1", "Calle Merlo", 170, 90);
let usuario2 = { ...usuario11 }; // Se puede usar spread para clonar el objeto
console.log(usuario11);

// ejer12
function crearUsuario2(nombre, direccion, altura, anchura) {
  let usuario = {
    user: {
      nombre: nombre,
      direccion: direccion,
      dimensiones: {
        altura: altura,
        anchura: anchura
      }
    },
    obtenerInfoUsuario() {
      return this.user;
    },
    obtenerAmigos() {
      return this.user?.amigos;
    },
    obtenerPareja() {
      return this.user?.pareja;
    }
  };
  return usuario;
}

let usuario12 = crearUsuario2("usuario1", "Calle Merlo", 170, 90);
console.log(usuario12.obtenerInfoUsuario());
console.log(usuario12.obtenerAmigos());
console.log(usuario12.obtenerPareja());
