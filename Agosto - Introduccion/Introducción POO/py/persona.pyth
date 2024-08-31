class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    # Estas funciones son las bases
    def saludar(self):
        return f'Hola, mi nombre es {self.nombre} y tengo {self.edad} años.'

    def cumpleanios(self):
        return f'¡Felicidades! tienes {self.edad} años.'

    def estudiar(self):
        return f'Estoy estudiando {self.carrera}.'

    def insti_educativo(self):
        return f'Estudio en la universidad {self.universidad}.'

    # Funciones que modifican a la base
    def nuevo_saludo(self):
        self.nombre = input('Ingrese un nuevo nombre: ')
        return f'Hola, yo soy {self.nombre}.'

    def nueva_edad(self):
        self.edad = int(input('Ingrese su nueva edad: '))
        while self.edad <= 0:
            print('Ha ocurrido un error, ingrese su edad nuevamente')
            self.edad = int(input('Ingrese nuevamente su edad: '))
        return f'Ahora tengo {self.edad} años.'

    def nuevo_estudio(self):
        self.carrera = input('Ingrese una nueva carrera: ')
        return f'Ahora estudio {self.carrera}.'

    def nueva_universidad(self):
        self.universidad = input('Ingrese una nueva universidad: ')
        return f'Ahora estudio en la Universidad {self.universidad}.'

    # Funciones que eliminan a la base, devuelven un vacío
    def sin_nombre(self):
        print('Su nombre ha sido eliminado.')
        self.nombre = ""
        return self.nombre

    def sin_edad(self):
        print('Su edad ha sido eliminada.')
        self.edad = ""
        return self.edad

    def sin_carrera(self):
        print('Su carrera ha sido eliminada.')
        self.carrera = ""
        return self.carrera

    def sin_educacion(self):
        print('Su universidad ha sido eliminada.')
        self.universidad = ""
        return self.universidad


# Crear una instancia de la clase Persona
persona = Persona('Samuel Aguilera', 18, 'Ingeniería Industrial', 'Catolica Boliviana')

# Ejemplos de uso
print(persona.saludar())
print(persona.cumpleanios())
print(persona.estudiar())
print(persona.insti_educativo())

# Modificar y mostrar los valores actualizados
print(persona.nuevo_saludo())
print(persona.nueva_edad())
print(persona.nuevo_estudio())
print(persona.nueva_universidad())

# Eliminar y mostrar los valores eliminados
print(persona.sin_nombre())
print(persona.sin_edad())
print(persona.sin_carrera())
print(persona.sin_educacion())
