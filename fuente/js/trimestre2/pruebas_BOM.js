//setTiomeout, setInterva, clearTimeOut
/*
let delay = 3000;
let texto = document.getElementById("muestra_texto");

document.getElementById("settimeout").addEventListener("click", (evento) =>{
    setTimeout((donde, demora)=>{
        texto.textContent = `estoy metiendo un texto en ${donde} tras ${demora} segundos`;
        texto.classList.remove("dp_none");
    }, delay, "un parrafo de texto", delay/1000);
});

let segundos = 0;
let delay2 = 1000;
let interval_ID;
document.getElementById("setinterval").addEventListener("click", (evento) =>{
    texto.classList.remove("dp_none");
    interval_ID = setInterval((texto_boton) =>{
         texto.textContent = `button ${texto_boton} pressed ${segundos} ago`;
        segundos ++;
    }, delay2, evento.target.textContent);
});

document.getElementById("cleartimeout").addEventListener("click", () =>{
    clearTimeout(interval_ID);
});

//open
let delay = 3000;
let texto = document.getElementById("muestra_texto");
let segundos = 0;
let delay2 = 1000;
let interval_ID;
let windows_ID;
let url = "http://127.0.0.7:5500/trimestre2/pruebas_BOM.html?";

document.getElementById("form1").addEventListener("click", (evento) =>{
    evento.preventDefault();
    switch(evento.target.textContent){
        case "SetTimeOut":
                setTimeout((donde, demora)=>{
                    texto.textContent = `estoy metiendo un texto en ${donde} tras ${demora} segundos`;
                    texto.classList.remove("dp_none");
                }, delay, "un parrafo de texto", delay/1000);
            break;
        case "SetInterval":
                texto.classList.remove("dp_none");
                interval_ID = setInterval((texto_boton) =>{
                    texto.textContent = `button ${texto_boton} pressed ${segundos} ago`;
                    segundos ++;
                }, delay2, evento.target.textContent);
            break;
        case "ClearTimeOut":
                clearTimeout(interval_ID);
            break;
        case "Abrir pestaña":
            let destino = "_blank";
            let parametros = "height=600, width=500, resizable";
            windows_ID = window.open(url, destino, parametros);
            break;
        case "Cerrar pestaña":
            setTimeout(() =>{
                windows_ID.close();
            }, 3000)
            break;
        case "resizeTo":
            windows_ID.resizeTo(700, 600);
            break;
        case "resizeBy":
            windows_ID.resizeBy(-100, 200);
            break;
        case "move":
            windows_ID.moveTo(500, 300);
            break;
        case "confirm":
            let opcion = window.confirm("¿Esta bien?");
            opcion ? window.alert("ha dicho que si") : window.alert("ha dicho que no");
            break;
        case "prompt":
            window.prompt("Que edad tienes?", "edad");
            break;
        case "propiedades":
            texto.classList.remove("dp_none");
            texto.textContent= `
                ${window.innerHeight}
                ${window.innerWidth}
                ${window.location}
                ${window.screen.height}
                ${window.screen.width}            
            `;
            break;
    }
});

//LOCATION
location.href;//para enviar a una ventana nueva
console.log(location.hostname);//nombre del dominio sin el protocolo ni las barras
window.location.protocol;//protocolo usado
let urls = "https://educacionadistancia.juntadeandalucia.es/centros/granada/course/view.php?id=3852";
location.assign(urls); //redirigue
location.replace(urls); //redirigue pero no se ve en el historial
location.reload(urls); //fuerza a que se descargue todo de nuevo
location.port;//puerto al que me conecto 
console.log(location.search)//saca parametros de la url

//NAVIGATOR
console.log(window.navigator.userAgent);//navegador que usa el usuario
console.log(navigator.cookieEnabled);//si las cookies estan activas
console.log(navigator.geolocation);//devuelve un objeto para interaccion con la API de geolocalizacion
console.log(navigator.language);//idioma del navegador
console.log(navigator.permissions);//idioma del navegador

*/




