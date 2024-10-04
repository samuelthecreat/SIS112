class listaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }
    elimiar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }
    buscar(valor) {
        return this.lista.indexOf(valor);
    }
    ordenar() {
        this.lista.sort((a, b) => a - b);
    }
}

// Crear una instancia de listaEnteros
let miLista = new listaEnteros();
miLista.agregar(21);
miLista.agregar(12);
miLista.agregar(15);
miLista.agregar(30);
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
    // Función para buscar un entero en la lista y mostrar el resultado
    function buscarEntero() {
        const valor = parseInt(document.getElementById('valor').value);
        if (!isNaN(valor)) {
            const index = miLista.buscar(valor);
            if (index !== -1) {
                document.getElementById('mensaje').innerHTML = valor + ' se encuentra en la posición: ' + index;
            } else {
                document.getElementById('mensaje').innerHTML = valor + ' no se encuentra en la lista.';
            }
            document.getElementById('valor').value = ''; // Limpiar el campo
        } else {
            alert('Por favor, ingrese un número válido.');
        }
    }

    // Función para ordenar la lista y mostrarla
    function ordenarLista() {
        miLista.ordenar();
        document.getElementById('resultado').innerHTML = 'Lista: ' + miLista.lista.join(', ');
        document.getElementById('mensaje').innerHTML = 'Lista ordenada.';
    }
}