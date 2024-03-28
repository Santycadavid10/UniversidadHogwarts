const maquinaanimal = document.getElementById("titulo7"); // creo variable que se comportara como maquina de imprimir
const maquinaanimal2 = document.getElementById("titulo5"); 
const maquinaanimal3 = document.getElementById("titulo6"); 
var conta = 0;
const maquinaescribititulo10 = (text = "",tiempo, etiqueta ="") => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("")    // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML=""   // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);     // detiene elimina el setInterval clearInterval
        }   // cierro  cont == arraycaracteres.length
        if(arraycaracteres[cont] == undefined && conta == 1){
            maquinaescribititulo10("Aquí, la presencia de tu ser ha convocado a un protector leal, tu Patronus, un reflejo de tu esencia más pura.",70, maquinaanimal3);
            conta += 1;
        }
        if(arraycaracteres[cont] == undefined && conta == 0){
            maquinaescribititulo10("tema animal patronus:",20, maquinaanimal2);
            conta += 1;
        }
    }, tiempo) 
}
maquinaescribititulo10("sEGUIMOS  ala clase de defensa Contra Las Artes Oscuras",80, maquinaanimal);


document.getElementById("video3").addEventListener("ended", function(){
    const elementobod = document.getElementById("cuerpo");  
    const elementopadre = document.getElementById("contenedorinicio");

    elementobod.removeChild(elementopadre);
    document.head.innerHTML =   `
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <link rel="stylesheet" href="./css/escojeanimal.css">
                                    <link rel="stylesheet" href="./css/fuente.css">
                                    <title>Document</title>
                                    `;

    let nuevoContenidoHTML =    `   <div id="contenedor">
                                    <img src="./imagenesVideos/animal.gif" alt="" id="gifanimales">
                                    <h3 id="letra"></h3>
                                    </div>
                                    `;
    document.body.innerHTML = nuevoContenidoHTML;
    const maquina1 = document.getElementById("letra"); // creo variable que se comportara como maquina de imprimir
    const maquinaescribititulo = (text = "",tiempo, etiqueta ="") => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("")    // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML=""   // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);     // detiene elimina el setInterval clearInterval
        }   // cierro  cont == arraycaracteres.length
        }, tiempo) 
    }
    maquinaescribititulo("tu animal patrunus te esta escojiendo ...........",210, maquina1);
    let seleccionanimales = Math.random();
    const elementobody = document.getElementById("cuerpo");  
    const elementopadres = document.getElementById("contenedor");
    elementobody.classList.add("difuminado");
    const timespera = setTimeout(function() {
        espera(seleccionanimales);
      }, 10000);
    
    
    function espera(animal) {

        elementobody.removeChild(elementopadres);
        document.head.innerHTML =   `
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <title>Document</title>
                                        <link rel="stylesheet" href="./css/animal.css">
                                        <link rel="stylesheet" href="./css/fuente.css">`;
                        
        let nuevoContenidoHTML =    `
                                        <img src="" class="agrandar" id="imagen">
                                        `
            
        document.body.innerHTML = nuevoContenidoHTML; 
        const animalseleccion = document.getElementById("imagen");
        var cadenaDesdeLocalStorageestudiante = sessionStorage.getItem('estudiante');
        var objetoDesdeLocalStorage = JSON.parse(cadenaDesdeLocalStorageestudiante);

        if(animal <= 0.1666666){
            animalseleccion.src ="./imagenesVideos/aveharry.jpg";
            objetoDesdeLocalStorage.animal = "cuervo";
         }

        else if(animal > 0.1666666666666667 && animal <= 0.3333333333333334){
            animalseleccion.src ="./imagenesVideos/agilaharry.jpg";
            objetoDesdeLocalStorage.animal = "agila";
        }
        else if(animal > 0.3333333333333334 && animal <= 0.5000000000000001){
            animalseleccion.src ="./imagenesVideos/caballoharry.jpg";
            objetoDesdeLocalStorage.animal = "caballo";
            console.log(objetoDesdeLocalStorage);
        }
        else if(animal > 0.5000000000000001 && animal <= 0.6666666666666668){
            animalseleccion.src ="./imagenesVideos/gatoharry.jpg";
            objetoDesdeLocalStorage.animal = "gato";
            console.log(objetoDesdeLocalStorage);
        }
        else if(animal > 0.6666666666666668 && animal <= 0.8333333333333335){
            animalseleccion.src ="./imagenesVideos/perroharry.jpg";
            objetoDesdeLocalStorage.animal = "perro";
            console.log(objetoDesdeLocalStorage);
        }
        else if(animal > 0.8333333333333335 && animal <= 1){
            animalseleccion.src ="./imagenesVideos/enfermeria.jpg";
            objetoDesdeLocalStorage.animal = "enfermeria";
            console.log(objetoDesdeLocalStorage);
        }
        objetoDesdeLocalStorage = JSON.stringify(objetoDesdeLocalStorage);
        sessionStorage.setItem('estudiante', objetoDesdeLocalStorage);
        var scriptElemento = document.createElement('script');
        scriptElemento.src = 'js/animal.js';
        document.body.appendChild(scriptElemento);                               
    }
    


});