var cadenaDesdeLocalStorageestudiante = sessionStorage.getItem('estudiante');
var objetoDesdeLocalStorage = JSON.parse(cadenaDesdeLocalStorageestudiante);
const animalelejido = objetoDesdeLocalStorage.animal;

const elementopadre = document.body;
const persona = document.createElement("h3");
const textopersona  = document.createTextNode // creo variable que sera el texto guardado para el boton participar
                            ("Querido "+objetoDesdeLocalStorage.nombre);                            
persona.appendChild(textopersona);
elementopadre.appendChild(persona);
persona.classList.add("animal");
persona.classList.add("animalt");
persona.classList.add("entrar");

const felicitaciones = document.createElement("h3");
var textofelicitaciones = ""; // creo variable que sera el texto guardado para el boton participar
switch(animalelejido){
  case "cuervo":
    textofelicitaciones = document.createTextNode
    ("El Cuervo, con su astua te elijo eres un ser discreto .");                            
  break;

  case "agila":
    textofelicitaciones = document.createTextNode
    ("El aguila, con sus alas extendidas, representa la fuerza interior que reside en tu ser magico .");                            
  break;

  case "caballo":
    textofelicitaciones = document.createTextNode
    ("El Caballo, con su fuerza y coraje te elijio .");                            
  break;

  case "gato":
    textofelicitaciones = document.createTextNode
    ("El Gato, con su energia mistica y secretos magicos te ha elejido .");                            
  break;

  case "perro":
    textofelicitaciones = document.createTextNode
    ("El Perro, el mas leal ser te ha escogido coomo su compañero .");                            
  break;

  case "enfermeria":
    textofelicitaciones = document.createTextNode
    ("Ningun animal te escogio y te ataco un bogart a enfermeria .");                            
  break;
}
felicitaciones.appendChild(textofelicitaciones);
elementopadre.appendChild(felicitaciones);
felicitaciones.classList.add("animalfelicita");
felicitaciones.classList.add("animalfelicitat");


var imagen = document.getElementById('imagen');

imagen.addEventListener('animationend', function () {
    persona.classList.add("entrar");
  });

persona.addEventListener('animationend', function () {
    felicitaciones.classList.add("entrar");
  });  


felicitaciones.addEventListener('animationend', function () {
  document.head.innerHTML =`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/final.css">
    <link rel="stylesheet" href="./css/fuente.css">
    ` 
  let nuevoContenidoHTML =`
 
    <img src="./imagenesVideos/fondo.gif" alt="">
    <h2 id="textotitulofinal"></h2>
    <h2 id="textonombre"></h2>
    <h2 id="textolinaje"></h2>
    <h2 id="textoedad"></h2>
    <h2 id="textocasa"></h2>
    <h2 id="textoanimal"></h2>
    <div>
        <span class="pan" id="flecha1"></span>
        <span class="pan" id="flecha2"></span>
    </div>

    <button class="button-63" role="button"><span id="boton">Repeat</span></button>

    `
    document.body.innerHTML = nuevoContenidoHTML;
    var scriptElement = document.createElement('script');
    scriptElement.src = 'js/final.js';
    document.body.appendChild(scriptElement);
  }); 

