function algoEstupido() {
    for (let i = 0; i < i<99999999999; i++) {
        for (let j = 0; j < 9999999999999; j++) {
            console.log("a");
        }
    }
}

const fetchPromise1 = fetch("https://api.github.com/users/manishmshiva");//metodo asincrono que se conecta una url y descarga lo que hay
const fetchPromise2 = fetch("https://cataas.com/cat");

document.addEventListener("click", (evento) =>{
    switch(evento.target.id){
        case "sincrona":
            //algoEstupido();
            break;
        case "asincrona":
            fetchPromise1.then((respuesta) =>{
                console.log(respuesta.status);
            });
            break;
        case "funcion_asincrona":
            (async()=>{

                let url = "https://api.github.com/users/manishmshiva";
                const response = await fetch(url);//metodo asincrono que se conecta una url y descarga lo que hay
                let resultado = await response.text();
                
            })();
            break;
        case "img":
            requestImg("https://cataas.com/cat");
            break;
        case "encadenar_promesas":
            fetchPromise1.then((response)=>{
                if (!response.ok) {
                    throw new miError({cod:2, msj:"error, didnt answer ok"});
                }
                return response.json();
            })
            .then((data) =>{
               console.log(data.login, data.id);
            })
            .catch((err)=>{
                throw new miError({cod:1, msj:"error, didnt get the file"});
            })
            break;
        case "all_promesas":
            Promise.all([fetchPromise1, fetchPromise2])//si todas las promesas tienen exito
            .then((response =>{
                for(const respuesta of response){
                    console.log(respuesta);
                }
            }));
            break;
        case "any_promesas":
            Promise.any([fetchPromise1, fetchPromise2])//si una promesa tiene exito se ejecuta
            .then((response =>{
                for(const respuesta of response){
                    console.log(respuesta);
                }
            }));
            break;
        
    }
});

function miError(error){
    console.log(error.cod, error.msj);
}

async function requestImg(miUrl){
    try {
       const response = await fetch(miUrl);
       if (!response.ok) {
        throw new miError({cod:2, msj:"error, didnt answer ok"});
       }
       const datos = await response.blob();

       let img = document.createElement("img");
       //img.style="100%";
       img.src=URL.createObjectURL(datos);
       document.getElementById("img").insertAdjacentElement("afterend", img);
       //img.setAttribute("src", datos);

       setTimeout(() =>{
            img.remove();
            URL.revokeObjectURL(img.src);
       }, 3000);


    } catch (err) {
        throw new miError({cod:1, msj:"error, couldnt get file"});
    }
}


/*
ESTADOS
 --Pending //Pendiente
 --fullfield //Ya tienes la respuesta
 --rejected //propuesta rechazada

*/

//AJAX(Asynchronous JavaScript and XML) permite obtener partes de paginas web y las muestra en el navegador del cliente
//FETCH



