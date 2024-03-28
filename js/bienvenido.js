var cadenaDesdeLocalStorageestudiante = sessionStorage.getItem('estudiante');
var objetoDesdeLocalStorage = JSON.parse(cadenaDesdeLocalStorageestudiante);
const casa = objetoDesdeLocalStorage.casa;
var tiempo = 200;
var entrada = 0;
//----------------------MAQUINA DE ESCRIBIR "Bienvenido  a  Hogwarts  escuela  de  magos" ---------------------------////


const maquina2 = document.getElementById("titulo2"); // creo variable que se comportara como maquina de imprimir

const maquinaescribititulo2 = (text = "",tiempo, etiqueta ="") => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("") ;   // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML="" ;  // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);     // detiene elimina el setInterval clearInterval
        }   // cierro  cont == arraycaracteres.length
        if(arraycaracteres[cont] == undefined){
            espera()
        }
    }, tiempo) 
}
switch (casa) {
    case 'Gryffindor':
        maquinaescribititulo2("Querido/a: "+objetoDesdeLocalStorage.nombre + "  Bienvenido a la noble y valiente Casa Gryffindor ",tiempo, maquina2);
      break;
    case 'Hufflepuff':
        maquinaescribititulo2("Querido/a: "+objetoDesdeLocalStorage.nombre + "  Bienvenido a Hufflepuff, valoramos la lealtad, paciencia y amistad ",tiempo, maquina2);
      break;
    case 'Ravenclaw':
        maquinaescribititulo2("Querido/a: "+objetoDesdeLocalStorage.nombre + "  Bienvenido a Ravenclaw inteligencia, creatividad y la sabiduria nos distingen",tiempo, maquina2);
        break;
    case 'Slytherin':
        maquinaescribititulo2("Querido/a: "+objetoDesdeLocalStorage.nombre + "  Bienvenido  Es un honor y un placer recibirte en la distinguida Casa Slytherin",tiempo, maquina2);
        break;
}


function tablaingreso() {
    var nuevoContenidotabla =    `
                                            <table class="table" id="tabla1">
                                            <thead>
                                            <tr>
                                            <th scope="col">Clases Hogwarts</th>
                                            <th scope="col">Profesor</th>
                                            </tr>
                                            </thead>
                                            <tbody class="table-group-divider">
                                            <tr>
                                            <th scope="row">Transformaciones</th>
                                            <td>Profesor Kevin Slughorn</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Herbologia</th>
                                            <td>Maria Umbridge</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Pociones</th>
                                            <td>Liliana McGonagall</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">encantamientos</th>
                                            <td colspan="2">Jackie</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Defensa contra las artes oscuras</th>
                                            <td colspan="2">Robinson Snape</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Animales magicos</th>
                                            <td colspan="2">David Filch</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Historia de la magia</th>
                                            <td colspan="2">Ronald Sprout</td>
                                            </tr>
                                            </tbody>
                                            </table>
                                            `;
                document.getElementById("table").innerHTML = nuevoContenidotabla;                            
                                        
                const Bontonseguir = document.createElement("button"); // creo un elemento boton con ell cual iniciar un proceso
                const textoBontonseguir  = document.createTextNode // creo variable que sera el texto guardado para el boton participar
                    ("Seguir");  // string que se desea mostrar
                Bontonseguir .appendChild(textoBontonseguir); // con .appenchidl ingreo la variable  textoBontonparticipar  dentro de Bontonparticipar para que muestre el texto 
                const elementopadre = document.getElementById("imagenabajo");
                elementopadre.appendChild(Bontonseguir);
                Bontonseguir.classList.add("btn", "btn-primary");
                Bontonseguir.addEventListener("click", seguir)       
            }


function espera() {

const maquinaescribitexto = (text = "",tiempo, etiqueta ="",hacer) => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("") ;   // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML="" ;  // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);     // detiene elimina el setInterval clearInterval
            }   // cierro  cont == arraycaracteres.length
        if(arraycaracteres[cont] == undefined){
            if(entrada == 0){
                const maquina4 = document.getElementById("texto3");
                switch (casa) {
                    case 'Gryffindor':
                        maquinaescribitexto("De la familia: "+objetoDesdeLocalStorage.familia+" y el linaje:  "+objetoDesdeLocalStorage.linaje+" a sus "+objetoDesdeLocalStorage.edad + " fue admilito en Gryffindor ",50, maquina4); 
                        break;
                    case 'Hufflepuff':
                        maquinaescribitexto("De la familia: "+objetoDesdeLocalStorage.familia+" y el linaje:  "+objetoDesdeLocalStorage.linaje+" a sus "+objetoDesdeLocalStorage.edad + " fue admilito en Hufflepuff ",50, maquina4); 
                        break;
                    case 'Ravenclaw':
                        maquinaescribitexto("De la familia: "+objetoDesdeLocalStorage.familia+" y el linaje:  "+objetoDesdeLocalStorage.linaje+" a sus "+objetoDesdeLocalStorage.edad + " fue admilito en Ravenclaw ",50, maquina4); 
                        break;
                    case 'Slytherin':
                        maquinaescribitexto("De la familia: "+objetoDesdeLocalStorage.familia+" y el linaje:  "+objetoDesdeLocalStorage.linaje+" a sus "+objetoDesdeLocalStorage.edad + " fue admilito en Slytherin ",50, maquina4); 
                        break;
                    }
                }
            if(entrada == 1){
                const flecha1 = document.getElementById("flecha1");
                const flecha2 = document.getElementById("flecha2");
                flecha1.classList.remove("invisible");
                flecha2.classList.remove("invisible");
                tablaingreso()
                }
          
            entrada += 1;
        }   
    }, tiempo) 
}
const maquina3 = document.getElementById("texto2");  
maquinaescribitexto("El estudiante:   "+objetoDesdeLocalStorage.nombre,50, maquina3);
}