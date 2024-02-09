/*
    Create a website that allows you to select a Marvel character and, once selected, presents information about comics they star in and 
    comics they appear with more characters. It must allow to click on these comics or characters to get more information about them. 
    To achieve it, you must use marvel API
*/

const PUBLIC_API_KEY = "641ab2f2119bbda87e74213dedd42693";
const PRIVATE_API_KEY = "f33436c57308fe959755fb89a76493a637bfde6e";
const API_URL = "https://gateway.marvel.com/v1/public/characters";
const tiempo = new Date().getTime();
const hash = CryptoJS.MD5(tiempo+PRIVATE_API_KEY+PUBLIC_API_KEY).toString();
const url = `${API_URL}?ts=${tiempo}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;

document.addEventListener("DOMContentLoaded", () => {
    fetch(url) // Aquí deberías usar la variable 'url' que has definido con todos los parámetros necesarios
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});