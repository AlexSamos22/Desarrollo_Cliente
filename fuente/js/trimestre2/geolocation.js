let caja_mensajes = document.getElementById("caja_mensajes");
let ID;
document.querySelector("section").addEventListener("click", (evento) =>{
    const opciones ={
        enableHeightAccuracy: true,
        maximumAge: 30000,
        timeout: 50000,
    };

    caja_mensajes.classList.remove("dp_none");
    if (evento.target.id == "geolocation") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(muestra_posicion, muestra_error, opciones);
           //ID = navigator.geolocation.watchPosition(muestra_posicion, muestra_error, opciones);
        }else{
            caja_mensajes.innerHTML = "Su navegador no soporta geolocalizacion";
        }
    }

    function muestra_posicion(posicion) {
       /* caja_mensajes.innerHTML = `longitud: ${posicion.coords.longitude}, latitud: ${posicion.coords.latitude}
        direccion: ${posicion.coords.heading}, altitud: ${posicion.coords.altitude}, velocidad: ${posicion.coords.speed}`;*/
        inicializar_mapa();
        pinta_mapa(posicion);
    }

    function muestra_error(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                caja_mensajes.innerHTML="PERMISO DENEGADO";
                break;
            case error.POSITION_UNAVAILABLE:
                caja_mensajes.innerHTML="No se encuentra GPS";
                break;
            case error.TIMEOUT:
                caja_mensajes.innerHTML="Expiro el tiempo";
                break;
            default:
                caja_mensajes.innerHTML="Error desconocido";
        }
    }

   function pinta_mapa(posicion){
        var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([51.5, -0.09]).addTo(map)
        .bindPopup("tu posicion actual")
        .openPopup();
   }

   function inicializar_mapa(){
        const mapa = document.getElementById("map_wrapper");
        const map =  document.getElementById("map");

        const newmap = document.createElement("div");
        newmap.setAttribute("id", "map");

        mapa.removeChild(map);
        mapa.append(newmap);
   }
});