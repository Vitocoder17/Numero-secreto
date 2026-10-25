//Interactuando con elementos HTML a traves de JavaScript usando el DOM (Document Object Model)

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Indica un número del 1 al 100";

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //declaramos una lista
let numeroMaximo = 100;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {   // Función con parámetros
    let elementoHTML = document.querySelector(elemento);   //querySelector, es un metodo que permite acceder a cualquier elemento HTML a usar.
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {   //Declaramos la funcion intentoDeUsuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   // Usamos la funcion getElementById, permite obtener el elemento por el ID de HTML

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {   // Triple =, valida la igualdad de una variable en tipo de dato y valor
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);  // Se usa Template Strings con el operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); //Permite habilitar el boton nuevo Juego cuando el usuario acierta

    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {   // Funcion que limpia la casilla de intentos
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {       // Funcion, Genera un número aleatorio
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');   // Llamamos a la funcion asignarTextoElemento con sus parametros
    asignarTextoElemento('P',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');   // # se usa cuando se toma un id
}
condicionesIniciales();
