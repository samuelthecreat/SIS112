class Persona {
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    saludar() {
        console.log('hola, mi nombre es' + this.nombre + 'y tengo' + this.edad + 'años');
    }

    cumpleaños() {
        this.edad = this.edad + 1;
        console.log('¡Feliz cumpleaños! Ahora tengo' + this.edad + 'años');
    }

    estudiar() {
        console.log('Estoy estudiando' + this.carrera);
    }
}

//crear una instancia
const persona1 = new Persona("Ana", 22, "Ingenieria Informatica" );

//Llamar a los métodos
persona1.saludar();
persona1.estudiar();