const xmaquinaanimal11 = document.getElementById("textotitulofinal"); // creo variable que se comportara como maquina de imprimir
const xmaquinaanimal12 = document.getElementById("textonombre"); 
const xmaquinaanimal13 = document.getElementById("textolinaje"); 
const xmaquinaanimal14 = document.getElementById("textoedad");
const xmaquinaanimal15 = document.getElementById("textocasa");
const xmaquinaanimal16 = document.getElementById("textoanimal");
var conta = 0;

var cadenaDesdeLocalStorageestudiante = sessionStorage.getItem('estudiante');
var objetoDesdeLocalStorage = JSON.parse(cadenaDesdeLocalStorageestudiante);


const xmaquinaescribititulo10 = (text = "",tiempo, etiqueta ="") => { // creo funcion que recibe tres parametros textoa agregar, tiempo de ejecucion, y rtiqueta
    let arraycaracteres = text.split("")    // creo variable para guardar la string con que vendra la funcion y le aplico.split para que la guarde como array
    etiqueta.innerHTML=""   // a etiqueta le aplico un ,innerhtml para agregar al doom 
    let cont = 0;   // creo variable servira como contador 
    let escribir = setInterval(function(){      //creo variable que sera igual ala funcion setInterval procedo a ejecutarla
        etiqueta.innerHTML += arraycaracteres[cont] // agrego en el doom el caracter en que valla la variable con 
        cont++;     // agrego 1 ala varable cont
        if(cont == arraycaracteres.length){     // si mi variable cont es igual a ala longitud de mi varible  arraycaracteres
            clearInterval(escribir);  
            console.log("hello");   // detiene elimina el setInterval clearInterval
            switch(conta){
                case 0:
                    xmaquinaescribititulo10("Nombre: " + objetoDesdeLocalStorage.nombre ,20, xmaquinaanimal12);
                    break;
                case 1:
                    xmaquinaescribititulo10("linaje: " + objetoDesdeLocalStorage.linaje,20, xmaquinaanimal13);
                    break;
                case 2:
                    xmaquinaescribititulo10("edad: " + objetoDesdeLocalStorage.edad,20, xmaquinaanimal14);
                    break;
                case 3:
                    xmaquinaescribititulo10("casa: " + objetoDesdeLocalStorage.casa,20, xmaquinaanimal15);
                    break;
                case 4:
                    xmaquinaescribititulo10("animal: " + objetoDesdeLocalStorage.animal,20, xmaquinaanimal16);
                    break;
            }
            conta++;
        }   // cierro  cont == arraycaracteres.length
        
    }, tiempo) 
}
xmaquinaescribititulo10("Excelente mago felicitaciones :)",60, xmaquinaanimal11);
