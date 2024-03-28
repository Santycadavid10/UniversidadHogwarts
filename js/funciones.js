function ingreso(){
    function ingresoestudiante(salon){
        var estudy = {
            nombre: valorInput,
            edad: valorInputedad,
            familia: valorInputfamilia,
            cualidades: valorInputCUALIDADES,
            linaje:valorInputLINAJE,
            casa:salon
        };
          console.log(estudy)
          var cadenaJSON = JSON.stringify(estudy);
          sessionStorage.setItem('estudiante', cadenaJSON);
    }
    const valorInput = document.getElementById("miInputnombre").value;
    var valorInputedad = document.getElementById("miInputedad").value;
    var valorInputfamilia = document.getElementById("miInputfamilia").value;
    var valorInputCUALIDADES = document.getElementById("miInputCUALIDADES").value;
    var valorInputLINAJE = document.getElementById("miInputLINAJE").value;

    if(valorInput == ""){
        document.getElementById("miInputnombre").focus(); 
        return;
    }
    else if(valorInputedad == ""){
        document.getElementById("miInputedad").focus(); 
        return;
    }
    else if(valorInputfamilia == ""){
        document.getElementById("miInputfamilia").focus(); 
        return;
    }
    else if(valorInputfamilia == ""){
        document.getElementById("miInputfamilia").focus(); 
        return;
    }
    else if(valorInputCUALIDADES == "Cualidades"){
        document.getElementById("miInputCUALIDADES").focus(); 
        return;
    }
    else if(valorInputLINAJE == "Linaje"){
        document.getElementById("miInputLINAJE").focus(); 
        return;
    }


    if(valorInputCUALIDADES == "Valor-Fuerza-Audacia"){  
        ingresoestudiante("Gryffindor");
        ingresogrifindor("Gryffindor");  
    }
    else if(valorInputCUALIDADES == "Justicia-lealtad-paciencia" && valorInputLINAJE == "Meztizo" || valorInputLINAJE == "Muggle"){ 
        ingresoestudiante("Hufflepuff");
        ingresogrifindor("Hufflepuff");
    }

    else if(valorInputCUALIDADES == "Creatividad-erudicion-inteligencia"){ 
        ingresoestudiante("Ravenclaw");
        ingresogrifindor("Ravenclaw");
    }

    else if(valorInputCUALIDADES == "Ambicion-determinacion-astucia" && valorInputLINAJE == "Sangre pura"){
        ingresoestudiante("Slytherin");
        ingresogrifindor("Slytherin");
    }

    else{
        const msj = document.getElementById("nopasa");
        msj.classList.remove("invisible");
        function miFuncion() {
            msj.classList.add("invisible");
          }
        setTimeout(miFuncion, 3000);
    }
    
}

function ingresogrifindor(casa){
    const myTimeout = setTimeout(myGreeting, 4000);
    const elementobod = document.getElementById("cuerpo");  
    const elementopadre = document.getElementById("contenedorinicio");
    elementopadre.classList.add("difuminado");
    function myGreeting() {

        elementobod.removeChild(elementopadre);
        document.head.innerHTML =`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido</title>
        <link rel="stylesheet" href="./css/bienvenido.css">
        <link rel="stylesheet" href="./css/fuente.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        `;

        let nuevoContenidoHTML =`
        <body class="bodyy">
        <main id="padrecontenedor">
        <section class="parallax bg">
        <div class="container">
        <div id="escudo"></div>
        <div id="CONTENEDORABAJO">
        <div class="abajo"></div>
        </div>
        </div>
        <div>
        <span class="invisible" id="flecha1"></span>
        <span class="invisible" id="flecha2"></span>
        </div>
        </section>
        <h1 id="titulo2"></h1>
        <h3 id="texto2"></h3>
        <h3 id="texto3"></h3>
        <section class="no-parallax" id="imagenabajo">
        <section id="table"></section>
        </section> 
        </main>
        <script src="js/funciones.js"></script>
        </body>
        `;
    
    document.body.innerHTML = nuevoContenidoHTML;
    // Crear y agregar el script al final del body
    var scriptElement = document.createElement('script');
    scriptElement.src = 'js/bienvenido.js';
    document.body.appendChild(scriptElement);
    const escudo = document.getElementById("escudo")
    switch (casa) {
        case 'Gryffindor':
            escudo.classList.add("Gryffindor");
            break;        
        case 'Hufflepuff':
            escudo.classList.add("Hufflepuff");
            break;
        case 'Ravenclaw':
            escudo.classList.add("Ravenclaw");
            break;
        case 'Slytherin':
            escudo.classList.add("Slytherin");
            break;
    }
  }
}



function seguir(){
    const myTimeout2 = setTimeout(myGreeting2, 4000);
    const elementobody = document.getElementById("cuerpo");  
    const elementocontenedor = document.getElementById("padrecontenedor");
    elementocontenedor.classList.add("difuminado");
    
    function myGreeting2() {
        elementobody.removeChild(elementocontenedor);
        document.head.innerHTML =       `
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <link rel="stylesheet" href="./css/videojuego.css">
                                        <link rel="stylesheet" href="./css/fuente.css">
                                        <title>Document</title>
                                        `;
                                    
        let nuevoContenidoHTML =    `
                                        <div id="contenedorinicio">
                                        <div id="contenedor">
                                        <video  id="video1"  controls  muted autoplay tabindex="-1">
                                        <source src="./imagenesVideos/clases.mp4" type="video/mp4">
                                        </video>
                                        </div>
                                        <h2 id="titulo2"> </h2>
                                        <h3 id="texto3"> </h3>
                                        <h3 id="texto4"> </h3>
                                        </div>
                                            `;
    document.body.innerHTML = nuevoContenidoHTML;
    var scriptElement = document.createElement('script');
    scriptElement.src = 'js/videojuego.js';
    document.body.appendChild(scriptElement);
        
    }
    
}

function perdiojuego(){
    const textoperdio = document.getElementById("perdio");
    textoperdio.classList.remove("invisble");
    const mydelay = setTimeout(espera, 3000);
    function espera() {
        textoperdio.classList.add("invisble");
    }    
}

function ganojuego(){
    const elementobody = document.getElementById("cuerpo");
    const textoperdio = document.getElementById("gano");
    textoperdio.classList.remove("invisble");
    elementobody.classList.remove("difuminado");
    elementobody.classList.remove("inicio");
    elementobody.classList.add("salida");
    const mydelay = setTimeout(espera, 10000);
    function espera() {
    textoperdio.classList.add("invisble");
    const juego = document.getElementById("juego");
    elementobody.removeChild(juego);
    document.head.innerHTML =       `
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>
                                    <link rel="stylesheet" href="./css/videoanimal.css">
                                    <link rel="stylesheet" href="./css/fuente.css">`;
    let nuevoContenidoHTML =    `
                                <div id="contenedorinicio">
                                <div id="contenedor">
                                <video  id="video3"  controls  muted autoplay tabindex="-1">
                                <source src="./imagenesVideos/animal.mp4" type="video/mp4">
                                </video>
                                </div id = "contitexto">
                                <h2 id="titulo7"> </h2>
                                <h2 id="titulo5"></h2>
                                <h2 id="titulo6"></h2>
                                </div> 
                                    `;
    document.body.innerHTML = nuevoContenidoHTML;
    var scriptElement = document.createElement('script');
    scriptElement.src = 'js/videoanimal.js';
    document.body.appendChild(scriptElement);
    }  
}




