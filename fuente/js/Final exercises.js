//EJER1
let numero = parseInt(prompt("Introduce un numero: "));
console.log("-----Menu--------")
console.log("Opcion 1 pintar un diamante");
console.log("Opcion 2 pintar un cuadrado");
console.log("Opcion 3 pintar una piramide");
let opcion = parseInt(prompt("Elige una opcion: "));

switch (opcion) {
  case 1:
    let diamante = '';
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= numero - i; j++) {
      diamante += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamante += '*';
    }
    diamante += '\n';
  }
  for (let i = numero - 1; i >= 1; i--) {
    for (let j = 1; j <= numero - i; j++) {
      diamante += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
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
        cuadrado += "*";
      }
      cuadrado += "\n";
    }
    console.log(cuadrado);
    break;
  case 3:
    let triangulo = '';
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <=  numero - i; j++) {
        triangulo += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        triangulo += '*';
      }
      triangulo += '\n';
    }


    console.log(triangulo);
    break;
  default:
    console.log("Opcion no valida");
    break;
}

//EJER2
