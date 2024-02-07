let obj = {};
for(let formulario of document.getElementsByTagName("form")){
    formulario.addEventListener("click", (evento) =>{
        evento.preventDefault();
    });
};

document.body.addEventListener("click", (evento) =>{
    switch (evento.target.id) {
        case "crearCookie":
            let nombre = document.querySelector("[name=nombre]");
            let valor = document.querySelector("[name=valor]");
            let max_age = document.querySelector("[name=max-age]");
            let galletita=`${nombre.value}=${valor.value};`;
            galletita+=`max-age=${max_age.value};`;
            document.cookie = galletita;
            break;
        case "mostrarCookie":
            window.alert(document.cookie);
            break;
//LocalStorage, sesionStorage
        case "localeStorage":
            let nombre2 = document.querySelector("[name=nombre1]");
            let valor2 = document.querySelector("[name=valor1]");
            if(nombre2.value!="" && valor2.value!=""){
                localStorage.setItem(nombre2.value, valor2.value);
            }
            break;
        case "create_complex_localeStorage":
            crear_Json(document.querySelectorAll("#cookie2 input"), obj);
            localStorage.setItem("preferencias", JSON.stringify(obj));
            break;
        case "read_complex_localeStorage":
            let objeto2 = JSON.parse(localStorage.getItem("preferencias"));
            console.log(objeto2);
            console.log(typeof(objeto2));
            break;
        case "remove_localeStorage":
            localStorage.removeItem("preferencias");
            break;
    }
    function crear_Json(elementos, objeto){
        for (let i = 0; i < elementos.length; i+=2) {
           if ((elementos[i].value!= "") && (elementos[i+1].value!="")) {
                objeto[elementos[i].value] = elementos[i+1].value;
           }
        }
    }
});

