//EJER1
class Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        this.manufactura = manufactura;
        this.modelo = modelo;
        this.year = year;
        this.tipoIngenieria = tipoIngenieria;
        this.poder = poder;
        this.cm3 = cm3;
        this.velocidadMax = velocidadMax;
        this.licenciaConducir = licenciaConducir;
        this.motor = false;
        this.velocidad = 0;
        this.combustible = 0;
    }

    encenderMotor(){
        if (this.motor) {
            return console.log("El motor ya esta encendido");
        }
        this.motor = true;
        return console.log("El motor esta encendido");
    }

    apagarMotor(){
        if (!this.motor) {
            return console.log("El motor ya esta apagado");
        }
        this.motor = false;
        return console.log("El motor esta apagado");
    }

    rellenarDeposito(litros){
        if (litros <= 0) {
            return console.log("No se puede rellenar el deposito con: " + litros + " litros");
        }
        this.combustible += litros;
        return console.log("El nuevo combustible del vehiculo es: " + this.combustible + " litros");
    }

    aumentarVelocidad(nuevaVelocidad){
        if (nuevaVelocidad <= 0) {
            return console.log("No se puede aumentar la velocidad");
        }else if (nuevaVelocidad > this.velocidadMax) {
            return console.log("La velocidad nueva excede la velocidad maxima del vehiculo");
        }
        this.velocidad = nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    disminuirVelocidad(nuevaVelocidad){
        if (nuevaVelocidad < 0) {
            return console.log("No se puede disminuir esa velocidad");
        }else if (nuevaVelocidad > this.velocidad) {
            return console.log("No se puede disminuir esa velocidad");
        }
        this.velocidad -= nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    static comparaVelocidad(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo1.tipoVehiculo; 
        }
    }

    static comparaPoder(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas poder que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas poder que " + vehiculo1.tipoVehiculo; 
        }
    }

    #numeroRudas(vehiculo){
        if (vehiculo.tipoVehiculo == "moto") {
            return "Tiene 2 ruedas";
        }else{
            return "Tiene 4 ruedas;"
        }
    }

    getRuedas(vehiculo){
        return this.#numeroRudas(vehiculo);
    }
}

class Camion extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "camion";
    }

    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}

class Coche extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "coche";
    }

    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}

class Moto extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "moto";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

class Furgoneta extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "furgoneta";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

class Caravana extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "caravana";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

let BMW = new Coche("maquinas", "X3", 2003, "combustion", 187.9, 4.7, 200, "B");
let YAMAHA = new Moto("maquinas", "MT", 2006, "combustion", 160, 2.3, 180, "B");


console.log(Vehiculo.comparaVelocidad(BMW, YAMAHA));
console.log(Vehiculo.comparaPoder(BMW, YAMAHA));
console.log(getRuedas(BMW));
//EJER2

class Animal {
    constructor(grupo, nombre, edad, formaDeMoverse, habitat, peso) {
        this.grupo = grupo;
        this.nombre = nombre;
        this.edad = edad;
        this.formaDeMoverse = formaDeMoverse;
        this.habitat = habitat;
        this.peso = peso;
    }

    dormir() {
        console.log(`${this.nombre} está durmiendo.`);
    }

    despertar() {
        console.log(`${this.nombre} está despierto.`);
    }

    moverse() {
        console.log(`${this.nombre} se mueve ${this.formaDeMoverse}.`);
    }

    detenerse() {
        console.log(`${this.nombre} se detuvo.`);
    }

    static compararPeso(animal1, animal2){
        if(animal1.peso > animal2.peso){
            return animal1.nombre + " pesa mas que " + animal2.peso; 
          }else{
            return animal2.peso + " pesa mas que " + animal1.peso; 
          }
    }

    #setPeso(peso){
        this.peso = peso;
    }

    }
  
class Mamifero extends Animal {
constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola) {
    super('mamífero', nombre, edad, formaDeMoverse, habitat, peso);
    this.numeroDePatas = numeroDePatas;
    this.tieneCola = tieneCola;
}
}

class Reptil extends Animal {
    constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola) {
        super('reptil', nombre, edad, formaDeMoverse, habitat, peso);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
    }
}

class Pez extends Animal {
    constructor(nombre, edad, formaDeMoverse, hábitat, peso, numeroDeAletas, tieneCola) {
        super('pez', nombre, edad, formaDeMoverse, hábitat, peso);
        this.numeroDeAletas = numeroDeAletas;
        this.tieneCola = tieneCola;
    }
}

let tiburon = new Pez("tiburon", 50, "nadando", "oceano", 3, "si");
let gato = new Mamifero("gato",3,"andando","casa",4,"si");
let serpiente = new Reptil("serpiente",7,"arrastrarse","campo",0,"si");

tiburon.moverse(); 
gato.dormir(); 
serpiente.despertar(); 

//EJER3
class tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        this.espacioBlanco = 1;
        this.tablero = [];
        this.movimientos = 0;
        this.inicioJuego = null;
        this.finJuego = null;
    }
  
  
    generarTablero(){
        let contador = 1;
        for (let i = 0; i < this.filas; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                if (contador <= (this.filas * this.columnas) - this.espacioBlanco) {
                    this.tablero[i][j] = contador ++;
                }else{
                    this.tablero[i][j] = " ";
                }
            }
        }
    }
  
    desordenarTablero(){
        for (let i = this.filas - 1; i >= 0 ;i--) {
            for (let j = this.columnas - 1; j >= 0; j--) {
                let randomI = Math.floor(Math.random() * (i + 1));
                let randomJ = Math.floor(Math.random() * (j + 1));
                let valorOriginal = this.tablero[i][j];
                let valorRandom = this.tablero[randomI][randomJ];
  
                this.tablero[i][j] = valorRandom;
                this.tablero[randomI][randomJ] = valorOriginal;
            }
        }
  
        this.inicioJuego = new Date();
    }
  
    movimiento(fila, columna) {
        let espacioBlanco = this.encontrarEspacioBlanco();
    
        if (!espacioBlanco) {
            return console.log("No se encontró el espacio en blanco");
        }
    
        const filaEspacioBlanco = espacioBlanco.fila;
        const columnaEspacioBlanco = espacioBlanco.columna;
    
        if (this.movimientoValido(fila, columna)) {
            let posNumero = this.tablero[fila][columna];
    
            this.tablero[fila][columna] = " ";
            this.tablero[filaEspacioBlanco][columnaEspacioBlanco] = posNumero;
    
            this.movimientos++;
            this.verificarFinJuego(); // Verificar si se ha ganado después de cada movimiento
        } else {
            console.log("Movimiento no válido");
        }
  }
  
    encontrarEspacioBlanco(){
       let espacioBlanco = null;
        for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (this.tablero[i][j] === " ") {
                espacioBlanco = { fila: i, columna: j };
                break;
            }
        }
    }
    return espacioBlanco;
  }
    movimientoValido(fila, columna){
         let espacioBlanco = this.encontrarEspacioBlanco();
         let filaEspacioBlanco = espacioBlanco.fila;
         let columnaEspacioBlanco = espacioBlanco.columna;
  
     return (
        (fila === espacioBlanco.fila - 1 && columna === espacioBlanco.columna) ||
        (fila === espacioBlanco.fila + 1 && columna === espacioBlanco.columna) ||
        (fila === espacioBlanco.fila && columna === espacioBlanco.columna - 1) ||
        (fila === espacioBlanco.fila && columna === espacioBlanco.columna + 1)
    );
  }
  
    verificarFinJuego(){
          let contador = 1;
          const celdasTotales = this.filas * this.columnas;
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (contador !== celdasTotales && this.tablero[i][j] != contador++) {
                    return false; 
                }
            }
            contador++;
        }
    
        this.finJuego = new Date();
        return true; 
    }

    reiniciar(){
        this.generarTablero();
        this.desordenarTablero();
        console.log(this.tablero);
    }
  
    estadisticas(){
        let movimientos = this.movimientos;
        let tiempoJuego = ((this.finJuego - this.inicioJuego) / 1000) / 60;
  
        return console.log("Has tenido: " + movimientos + " movimientos y has tardado en acabar " + tiempoJuego + " minutos");
    }
  }
  
  const juego = new tablero(3, 3); 
  

  juego.generarTablero();
  juego.desordenarTablero();
  

  console.log(juego.tablero);
  while(!juego.verificarFinJuego()){
    console.log(juego.tablero);
    let fila = parseInt(prompt("inserte la fila para mover: "));
    let col = parseInt(prompt("Inserte la columna para mover: "));
    juego.movimiento(fila, col); 
  }
  
  juego.estadisticas(); 

//EJER 4
class TresEnRaya {
    constructor() {
        this.tablero = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.turnoActual = 'X';
        this.ganador = null;
        this.movimientos = 0;
    }

    imprimirTablero() {
        for (let fila of this.tablero) {
            console.log(fila.join(' | '));
            console.log('---------');
        }
    }

    hacerMovimiento(fila, columna) {
        if (this.tablero[fila][columna] === ' ') {
            this.tablero[fila][columna] = this.turnoActual;
            this.movimientos++;
            this.verificarGanador(fila, columna);
            this.cambiarTurno();
            return true;
        }
        return false;
    }

    cambiarTurno() {
        this.turnoActual = (this.turnoActual == 'X' ? 'O' : 'X');
    }

    verificarGanador(fila, columna) {
        if (//Verificar que los movimientos seas mayores a 3
            this.verificarFila(fila) ||
            this.verificarColumna(columna) ||
            this.verificarDiagonales() ||
            this.verificarAntiDiagonales()
            ) {
            this.ganador = this.turnoActual;
        } else if (this.movimientos === 9) {
            this.ganador = 'empate';
        }
    }

    verificarFila(fila) {
        return this.tablero[fila][0] === this.turnoActual &&
               this.tablero[fila][1] === this.turnoActual &&
               this.tablero[fila][2] === this.turnoActual;
    }

    verificarColumna(columna) {
        return this.tablero[0][columna] === this.turnoActual &&
               this.tablero[1][columna] === this.turnoActual &&
               this.tablero[2][columna] === this.turnoActual;
    }

    verificarDiagonales() {
        return this.tablero[0][0] === this.turnoActual &&
               this.tablero[1][1] === this.turnoActual &&
               this.tablero[2][2] === this.turnoActual;
    }

    verificarAntiDiagonales() {
        return this.tablero[0][2] === this.turnoActual &&
               this.tablero[1][1] === this.turnoActual &&
               this.tablero[2][0] === this.turnoActual;
    }

    obtenerGanador() {
        return this.ganador;
    }
}


let EnRalla = new TresEnRaya();


juego.hacerMovimiento(0, 0);
juego.hacerMovimiento(1, 1);
juego.hacerMovimiento(0, 1);
juego.hacerMovimiento(1, 0);
juego.hacerMovimiento(2, 2);
juego.hacerMovimiento(1, 2);

juego.imprimirTablero();

const ganador = juego.obtenerGanador();
if (ganador === 'empate') {
    console.log('¡Es un empate!');
} else if (ganador) {
    console.log(`¡El jugador ${ganador} ha ganado!`);
} else {
    console.log('El juego continúa...');
}
