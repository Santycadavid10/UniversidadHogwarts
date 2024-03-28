var contador = 0;
const maquinaintro = document.getElementById("titulo2"); // creo variable que se comportara como maquina de imprimir
const maquinaintro3 = document.getElementById("texto3");
const maquinaintro4 = document.getElementById("texto4");
const maquinaescribiintro = (text = "",tiempo, etiqueta ="") => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("")    // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML=""   // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);     // detiene elimina el setInterval clearInterval
        }   // cierro  cont == arraycaracteres.length
        
        if(arraycaracteres[cont] == undefined && contador == 1){
            maquinaescribiintro("RECUERDA   SOLO   SELECCIONA   LO   GRACIOSO",100, maquinaintro4); 
            const elementobody = document.getElementById("cuerpo");  
            const elementopadre = document.getElementById("contenedorinicio");
            elementopadre.classList.add("difuminado");   
            contador += 1;
        }
        
        if(arraycaracteres[cont] == undefined && contador == 0){
            maquinaescribiintro("Espero que estes mas que listo vamos a clases de transformaciones tema boggarts convierte tus temores en risas solo selecciona lo gracioso ",90, maquinaintro3);;
            contador += 1;
        }
        
        
    }, tiempo) 
}
maquinaescribiintro("Primer dia Primer reto:",110, maquinaintro);


document.getElementById("video1").addEventListener("ended", function(){
    const myTimeout = setTimeout(myGreeting, 3000);
    elementobody = document.getElementById("cuerpo");  
    elementopadre = document.getElementById("contenedorinicio");
    elementobody.classList.add("difuminado");
    function myGreeting() {

        elementobody.removeChild(elementopadre);
        document.head.innerHTML =       `
                                        <link rel="stylesheet" media="all" href="./css/juego.css" />
                                        <link rel="stylesheet" href="./css/fuente.css">
                                        `;

        let nuevoContenidoHTML =    `
                                        <div class="box"  id="juego">
                                        <button style="--i:1"  onclick="perdiojuego()"><img src="./imagenesVideos/spider.jpg" ></button>
                                        <button style="--i:2" onclick="perdiojuego()"><img src="./imagenesVideos/spider1.jpg" ></button>
                                        <button style="--i:3" onclick="perdiojuego()"><img src="./imagenesVideos/spider2.jpg" ></button>
                                        <button style="--i:4" onclick="ganojuego()"><img src="./imagenesVideos/SpiderWithHat.jpg" ></button>
                                        </div>
                                        <h3 id="perdio" class="invisble">fijate bien supera tus miedos</h3>
                                        <h3 id="gano" class="invisble">Ganaste CRACK echizo RIDIKULUS</h3>
                                        <img src="./imagenesVideos/spider1.jpg" alt="" id="gifanimales" class="invisble">
                                        <script src="./js/funciones.js"></script>
                                                `;
        document.body.innerHTML = nuevoContenidoHTML;
    }

});