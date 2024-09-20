class Cadena{
    constructor(cadena){
        this.cadena = cadena; 
    }

    getCadena(){
        return this.cadena; 
    }

    cancatenar(otraCadena){
        this.cadena += otraCadena;
    }

    invertir(){
        let cadenaInvertida = '';
        for (let i = this.cadena.lenght -1; i >= 0; i--){
            cadenaInvertida += this.cadena[i];
        }
        this.cadena = cadenaInvertida; 
    }
    
    esVacia(){
        return this.cadena.lenght === 0; 
    }

    contiene(subcadena){
        return this.cadena.includes(subcadena);
    }

    comienzaCon(prefijo){
        return this.cadena.startsWith(prefijo);
    }

    terminaCon(sufijo){
        return this.cadena.endsWith(sufijo); 
    }

    longitud(){
        return this.cadena.lenght;
    }

    aMayusculas(){
        return this.cadena.toUpperCase();
    }

    aMinusculas(){
        return this.cadena.toLowerCase();
    }
}

let cadenaObj = new Cadena('');

function mostrarCadena() {
    document.getElementById('resultado').innerText = "Cadena: " + cadenaObj.getCadena();
}

function concatenarCadena() {
    let nuevaCadena = prompt("Ingresa una cadena para concatenar:");
    cadenaObj.cancatenar(nuevaCadena);
    mostrarCadena();
}

function invertirCadena() {
    cadenaObj.invertir();
    mostrarCadena();
}

function verificarVacia() {
    let esVacia = cadenaObj.esVacia() ? "Sí" : "No";
    document.getElementById('resultado').innerText = "¿Es vacía?: " + esVacia;
}

function verificarContiene() {
    let subcadena = prompt("Ingresa una subcadena para buscar:");
    let contiene = cadenaObj.contiene(subcadena) ? "Sí" : "No";
    document.getElementById('resultado').innerText = "Contiene '" + subcadena + "': " + contiene;
}

function comenzarCon() {
    let prefijo = prompt("Ingresa un prefijo:");
    let comienza = cadenaObj.comienzaCon(prefijo) ? "Sí" : "No";
    document.getElementById('resultado').innerText = "Comienza con '" + prefijo + "': " + comienza;
}

function terminarCon() {
    let sufijo = prompt("Ingresa un sufijo:");
    let termina = cadenaObj.terminaCon(sufijo) ? "Sí" : "No";
    document.getElementById('resultado').innerText = "Termina con '" + sufijo + "': " + termina;
}

function obtenerLongitud() {
    let longitud = cadenaObj.longitud();
    document.getElementById('resultado').innerText = "Longitud: " + longitud;
}

function convertirMayusculas() {
    let mayusculas = cadenaObj.aMayusculas();
    document.getElementById('resultado').innerText = "En mayúsculas: " + mayusculas;
}

function convertirMinusculas() {
    let minusculas = cadenaObj.aMinusculas();
    document.getElementById('resultado').innerText = "En minúsculas: " + minusculas;
}