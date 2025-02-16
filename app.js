let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosAleatorios = [];
let maximoIntentos = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDelUsuario));
    //console.log(numeroAleatorio);
    //console.log(numeroDelUsuario);
    console.log(intentos);
    if(numeroAleatorio === numeroDelUsuario){
        asignarTextoElemento('p', `Felicitaciones! Acertaste en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acertó
        if (numeroDelUsuario > numeroAleatorio){
            asignarTextoElemento('p', 'Número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'Número secreto es mayor');
        }
        intentos++;
        limpiarTexto();
    }
    return;
}

function limpiarTexto(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*maximoIntentos) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosAleatorios);

    //si ya encontramos todos los números
    if (listaNumerosAleatorios.length == maximoIntentos){
        asignarTextoElemento('p', 'Llegaste al límite de juegos! Compre la versión premium!');
    } else {
        //si número generado está en la lista
        if (listaNumerosAleatorios.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }
        else{
            listaNumerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto en desarrollo');
    asignarTextoElemento('p', `Indica un número del 1 al ${maximoIntentos}`);
    numeroAleatorio = generarNumeroAleatorio();
    intentos = 1;
    return;        
}

function reiniciarJuego() {
    //limpiar Texto
    limpiarTexto();
    //solicitar número
    //generar número aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
/*
function hola(nombreUsuario){
    console.log(`Hola ${nombreUsuario}`);
}

function maximo(num1, num2, num3){
    console.log(Math.max(num1, num2, num3));
}

//hola('Roger');
//maximo(3, 10, 9);
*/