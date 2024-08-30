class Persona {
  constructor(nombre, edad, carrera, universidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.universidad = universidad;
  }

  //estas funciones son las bases
  saludar() {
    return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
  }

  cumpleanios() {
    return '¡Felicidades! tienes ' + this.edad + ' años.';
  }

  estudiar() {
    return 'Estoy estudiando ' + this.carrera;
  }

  insti_educativo() {
    return 'Estudio en la universidad ' + this.universidad;
  }

  //funciones que modifican a la base
  nuevo_saludo(){
    this.nombre = prompt('Ingrese un nuevo nombre')
    return 'Hola, yo soy ' + this.nombre;
  }

  nueva_edad(){
    this.edad = prompt ('ingrese su nueva edad')
    while (this.edad <= 0) {
      alert ('ha ocurrido un error, ingrese su edad nuevamente')
      this.edad = prompt ('ingrese nuevamente su edad')
    }
    return 'Ahora tengo ' + this.edad + ' años ';
  }

  nuevo_estudio(){
    this.carrera = prompt ('ingrese una nueva carrera')
    return 'Ahora estudio ' + this.carrera;
  }

  nueva_universidad(){
    this.universidad = prompt ('ingrese una nueva universidad')
    return 'Ahora estudio en la Universidad ' + this.universidad;
  }

  //funciones que eliminan a la base, devuelven un vacio
  sin_nombre(){
    alert ('su nombre ha sido eliminado')
    this.nombre = ""
    return this.nombre
  }

  sin_edad(){
    alert ('su edad ha sido eliminada')
    this.edad = ""
    return this.edad
  }

  sin_carrera(){
    alert ('su carrera ha sido eliminada')
    this.carrera = ""
    return this.carrera
  }

  sin_educacion(){
    alert ('su universidad ha sido eliminada')
    this.universidad = ""
    return this.universidad
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona('Samuel Aguilera', 18, 'Ingeniería Industrial', 'Catolica Boliviana');

// Inicializar los elementos HTML
const saludar = document.getElementById('saludar');
const edad = document.getElementById('edad');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');

// Función para saludar
function botonSaludar() {
  saludar.textContent = persona.saludar();
}

// Función para cumpleaños
function botonCumpleanios() {
  edad.textContent = persona.cumpleanios();
}

// Función para estudiar
function botonEstudiar() {
  carrera.textContent = persona.estudiar();
}

// Función para la universidad
function botonUniversidad() {
  universidad.textContent = persona.insti_educativo();
}

// Función para modificar el saludo
function botonModificarSaludo() {
  saludar.textContent = persona.nuevo_saludo();
}

// Función para modificar la edad
function botonModificarEdad() {
  edad.textContent = persona.nueva_edad();
}

// Función para modificar la carrera
function botonModificarCarrera() {
  carrera.textContent = persona.nuevo_estudio();
}

// Función para modificar la universidad
function botonModificarUniversidad() {
  universidad.textContent = persona.nueva_universidad();
}

// Función para modificar el saludo
function botonEliminarSaludo() {
  saludar.textContent = persona.sin_nombre();
}

// Función para modificar la edad
function botonEliminarEdad() {
  edad.textContent = persona.sin_edad();
}

// Función para modificar la carrera
function botonEliminarCarrera() {
  carrera.textContent = persona.sin_carrera();
}

// Función para modificar la universidad
function botonEliminarUniversidad() {
  universidad.textContent = persona.sin_educacion();
}