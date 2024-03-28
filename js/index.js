
//----------------------MAQUINA DE ESCRIBIR "Bienvenido  a  Hogwarts  escuela  de  magos" ---------------------------////
const maquina1 = document.getElementById("titulo1"); // creo variable que se comportara como maquina de imprimir
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
maquinaescribititulo("Bienvenido  a  Hogwarts  escuela  de  magos",210, maquina1);//ejecuto funcion  con parametros Bienvenido  a  Hogwarts  escuela  de  magos,210,maquina1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
/////111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//-AGREGO INPTUS TIPO TEXT POR MEDIO DE JS SOLO SE COMENTA PRIMER INPUT POR QUE OTROS SE REPITE EL PRCESO CAMBIANDO LA VARIABLE -///
///111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
///11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

document.getElementById("video1").addEventListener("ended", function(){ // activo funcion cuando el video se termina
    const parrafosaludo = document.createElement("p");  // creo variable que sera una <p> en html 
    const textoparrafosaludo = document.createTextNode  // creo variable que sera el texto guardado 
    ("Registrate"); // texto a guardar 
    const elementobod = document.getElementById("cuerpo");  
    const elementopadre = document.getElementById("contenedorinicio");   // creo variable y la igualo al body de elemento 
    elementopadre.appendChild(parrafosaludo);   // agrego a esta variable que es el body  la variable antes creado que es una <p>
    parrafosaludo.appendChild(textoparrafosaludo);  //agrego ala p un texto 
    parrafosaludo.classList.add("registrate");      // agrego una clase a dicha <p>

    const contenedorregistro = document.createElement("div");       //creo elemento div para contener el registro de el usuario con intencion de mostrarlo en el html
    const contenedornombre = document.createElement("div");     //creo elemento div para contener los datos de nombre del usuario con intencion de mostrarlo en el html
    const contenedortexto = document.createElement("span");     //creo elemento span para contener el texto nombre y con intencion de mostrarlo en el html
    const textocontenedortexto = document.createTextNode    // creo variable que sera el texto guardado  que deseo mostrar
    ("Nombre");     // dicho texto en caracteres
    contenedortexto.appendChild(textocontenedortexto);      // con .appendChild introduzco textocontenedortexto dentro de contenedortexto
    const contenedorinput = document.createElement("input");
    contenedorinput.id = "miInputnombre";    // CREO UN ELEMENTO INPUTS  
    elementopadre.appendChild(contenedorregistro);  // agrego el contenedor de los datos que eingresare al elemento padre antes igualado al body del documento 
    contenedorregistro.appendChild(contenedornombre); //  con .appendChild introduzco contenedornombre dentro de contenedorregistro
    contenedornombre.appendChild(contenedortexto); //  con .appendChild introduzco contenedortexto dentro de contenedornombre
    contenedornombre.appendChild(contenedorinput); //  con .appendChild introduzco contenedorinput dentro de contenedornombre
    contenedorregistro.classList.add("contenedordatos"); // agrego clases a contenedorregistro
    contenedornombre.classList.add("input-grou","input-group-lg","contenedorenombre"); // agrego clases a contenedornombre
    contenedortexto.classList.add("input-group-text");// agrego clases a contenedortexto
    contenedorinput.classList.add("form-control","form-controlinput","contenedorinputnombre");// agrego clases a contenedorinput
    contenedorinput.setAttribute("aria-label", "Sizing example input"); // agrego atributos a contenedorinput
    contenedorinput.setAttribute("aria-describedby", "inputGroup-sizing-lg");// agrego atributos a contenedorinput

//--------------------------------------------------------------------------------------------------------------------
   
    const contenedoredad = document.createElement("div");
    const contenedortextoedad = document.createElement("span");
    const textocontenedortextoedad = document.createTextNode  
    ("Edad");
    contenedortextoedad.appendChild(textocontenedortextoedad);
    const contenedorinputedad = document.createElement("input");
    contenedorinputedad.setAttribute("type", "number");
    contenedorinputedad.setAttribute("type", "number");
    contenedorinputedad.id = "miInputedad"; 
    contenedorregistro.appendChild(contenedoredad);   
    contenedoredad.appendChild(contenedortextoedad);
    contenedoredad.appendChild(contenedorinputedad);
    contenedoredad.classList.add("input-grou","input-group-lg","contenedoredad");
    contenedortextoedad.classList.add("input-group-text");
    contenedorinputedad.classList.add("form-control","form-controlinput","contenedorinputedad");
    contenedorinputedad.setAttribute("aria-label", "Sizing example input");
    contenedorinputedad.setAttribute("aria-describedby", "inputGroup-sizing-lg");

//-------------------------------------------------------------------------------------------------------------------

    const contenedorfamilia = document.createElement("div");
    const contenedortextofamilia = document.createElement("span");
    const textocontenedortextofamilia = document.createTextNode 
    ("Familia");
    contenedortextofamilia.appendChild(textocontenedortextofamilia);
    const contenedorinputfamilia = document.createElement("input");
    contenedorinputfamilia.id = "miInputfamilia"; 
    contenedorregistro.appendChild(contenedorfamilia);   
    contenedorfamilia.appendChild(contenedortextofamilia);
    contenedorfamilia.appendChild(contenedorinputfamilia);
    contenedorfamilia.classList.add("input-grou","input-group-lg","contenedorfamilia");
    contenedortextofamilia.classList.add("input-group-text");
    contenedorinputfamilia.classList.add("form-control","form-controlinput","contenedorinputfamilia");
    contenedorinputfamilia.setAttribute("aria-label", "Sizing example input");
    contenedorinputfamilia.setAttribute("aria-describedby", "inputGroup-sizing-lg");








    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///CREO E INSERTO SELEC EN EL HTML SOLO SE COMENTA EL PRIMERO YA QUE EL SEGUNDO ES IGUAL SOLO CAMBIANDO VARIABLES //////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const contenedorCUALIDADES = document.createElement("select");
    contenedorCUALIDADES.id = "miInputCUALIDADES";
    const contenedorcualidades = document.createElement("option");
    const textocontenedorcualidade = document.createTextNode // creo variable que sera el texto guardado 
    ("Cualidades");
    contenedorcualidades.appendChild(textocontenedorcualidade);
    const contenedorValor = document.createElement("option");
    const textocontenedorValor = document.createTextNode // creo variable que sera el texto guardado 
    ("Valor-Fuerza-Audacia");
    contenedorValor.appendChild(textocontenedorValor);
    const contenedorJusticia = document.createElement("option");
    const textocontenedorJusticia = document.createTextNode // creo variable que sera el texto guardado 
    ("Justicia-lealtad-paciencia");
    contenedorJusticia.appendChild(textocontenedorJusticia);
    const contenedorCreatividad = document.createElement("option");
    const textocontenedorCreatividad = document.createTextNode // creo variable que sera el texto guardado 
    ("Creatividad-erudicion-inteligencia");
    contenedorCreatividad.appendChild(textocontenedorCreatividad);
    const contenedorAmbicion = document.createElement("option");
    const textocontenedorAmbicion = document.createTextNode // creo variable que sera el texto guardado 
    ("Ambicion-determinacion-astucia");
    contenedorAmbicion.appendChild(textocontenedorAmbicion);

    elementopadre.appendChild(contenedorCUALIDADES);
    contenedorCUALIDADES.appendChild(contenedorcualidades);
    contenedorCUALIDADES.appendChild(contenedorValor);
    contenedorCUALIDADES.appendChild(contenedorJusticia);
    contenedorCUALIDADES.appendChild(contenedorCreatividad);
    contenedorCUALIDADES.appendChild(contenedorAmbicion);
    contenedorCUALIDADES.classList.add("form-select","form-select","contenedorvalor");
    contenedorCUALIDADES.setAttribute("aria-label", "Default select example")
    contenedorcualidades.setAttribute("disabled", "select")


    //---------------------------------------------------------------------------------------------------------

    const contenedorLINAJE = document.createElement("select");
    contenedorLINAJE.id = "miInputLINAJE";
    const contenedorlinaje = document.createElement("option");
    const textocontenedorlinaje = document.createTextNode  
    ("Linaje");
    contenedorlinaje.appendChild(textocontenedorlinaje);
    const contenedormeztizo = document.createElement("option");
    const textocontenedormeztizo = document.createTextNode // creo variable que sera el texto guardado 
    ("Meztizo");
    contenedormeztizo.appendChild(textocontenedormeztizo);
    const contenedormuggle = document.createElement("option");
    const textocontenedormuggle = document.createTextNode // creo variable que sera el texto guardado 
    ("Muggle");
    contenedormuggle.appendChild(textocontenedormuggle);
    const contenedorsangre = document.createElement("option");
    const textocontenedorsangre = document.createTextNode // creo variable que sera el texto guardado 
    ("Sangre pura");
    contenedorsangre.appendChild(textocontenedorsangre);
    

    elementopadre.appendChild(contenedorLINAJE);
    contenedorLINAJE.appendChild(contenedorlinaje);
    contenedorLINAJE.appendChild(contenedormeztizo );
    contenedorLINAJE.appendChild(contenedormuggle);
    contenedorLINAJE.appendChild(contenedorsangre);
    contenedorLINAJE.classList.add("form-select","form-select","contenedorlinaje");
    contenedorLINAJE.setAttribute("aria-label", "Default select example");
    contenedorlinaje.setAttribute("disabled", "select")
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------creo e insero botton en el html---------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

const Bontonparticipar = document.createElement("button"); // creo un elemento boton con ell cual iniciar un proceso
const textoBontonparticipar = document.createTextNode // creo variable que sera el texto guardado para el boton participar
    ("Pariticipar");  // string que se desea mostrar
Bontonparticipar.appendChild(textoBontonparticipar); // con .appenchidl ingreo la variable  textoBontonparticipar  dentro de Bontonparticipar para que muestre el texto 

elementopadre.appendChild(Bontonparticipar);
Bontonparticipar.classList.add("btn", "btn-primary","Bontonparticipar");
Bontonparticipar.addEventListener("click", ingreso)

});// AQUI CIERRA LA FUNCION QUE INICIA A ACABARSE EL VIDEO1 DE INICIO 


