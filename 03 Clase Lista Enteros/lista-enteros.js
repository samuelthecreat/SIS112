class listaEnteros {
    constructor(){
        this.lista = [];
    }

    agregar(valor){
        this.lista.push(valor);
    }
}

// Crear una instancia de listaEnteros
let miLista = new listaEnteros();

// Función para agregar enteros a la lista y mostrarla
function agregarEntero() {
    const valor = document.getElementById('valor').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('resultado').innerHTML = 'Lista: ' + miLista.lista.join(', ');
        document.getElementById('valor').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingrese un número válido.');
    }
}