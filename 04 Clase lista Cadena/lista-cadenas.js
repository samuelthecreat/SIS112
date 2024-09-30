class listaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort(); // Ordenación alfabética
    }
}

// Crear una instancia de listaCadenas
let miLista = new listaCadenas();

// Función para agregar cadenas a la lista y mostrarla
function agregarCadena() {
    const valor = document.getElementById('valor').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('resultado').innerHTML = 'Lista: ' + miLista.lista.join(', ');
        document.getElementById('valor').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingrese una cadena válida.');
    }
}

// Función para buscar una cadena en la lista y mostrar el resultado
function buscarCadena() {
    const valor = document.getElementById('valor').value;
    if (valor) {
        const index = miLista.buscar(valor);
        if (index !== -1) {
            document.getElementById('mensaje').innerHTML = valor + ' se encuentra en la posición: ' + index;
        } else {
            document.getElementById('mensaje').innerHTML = valor + ' no se encuentra en la lista.';
        }
        document.getElementById('valor').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, ingrese una cadena válida.');
    }
}

// Función para ordenar la lista y mostrarla
function ordenarLista() {
    miLista.ordenar();
    document.getElementById('resultado').innerHTML = 'Lista: ' + miLista.lista.join(', ');
    document.getElementById('mensaje').innerHTML = 'Lista ordenada alfabéticamente.';
}
