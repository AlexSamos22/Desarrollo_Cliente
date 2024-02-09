let objetoJSON = '("nombre":"pepe")';
try {
   let usuario = JSON.parse(objetoJSON);
   console.log(usuario.nombre)
   if (!usuario.direccion) {
        throw new SyntaxError("Ese campo no existe");
   }
} catch (err) {
    console.error(err.name, err.mesagge)
}

///////LANZAR ERRORS
//let num = prompt("dame un numero entre 1 y 10");
try {
    if (isNaN(num)) {
        throw "no es un numero";
    }else if(num>10){
        throw "te has pasado";
    }else if(num < 0){
        throw "te has quedado corto"
    }

    console.log("Bien hecho");
} catch (err) {
    console.error(err);
}finally{
    console.log("Has llegado aqui");
}


//MANEJADOR DE ERRORES
function manejadorErrores(error){
    console.log(error.cod, error.mensaje);
}

try {
    funcionquenoexiste();
} catch (err) {
    throw new manejadorErrores({cod:1, mensaje:"no existe", error:err});
}

