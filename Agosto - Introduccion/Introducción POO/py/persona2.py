import re

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
        while True:
            nombre = input('Ingrese un nuevo nombre: ')
            if re.match("^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$", nombre):
                self.nombre = nombre
                break
            else:
                print('Error: El nombre solo puede contener letras y espacios.')
        return f'Hola, yo soy {self.nombre}.'

    def nueva_edad(self):
        while True:
            try:
                edad = int(input('Ingrese su nueva edad: '))
                if edad > 0:
                    self.edad = edad
                    break
                else:
                    print('Error: La edad debe ser un número positivo mayor que cero.')
            except ValueError:
                print('Error: Debe ingresar un número válido.')
        return f'Ahora tengo {self.edad} años.'

    def nuevo_estudio(self):
        while True:
            carrera = input('Ingrese una nueva carrera: ')
            if re.match("^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$", carrera):
                self.carrera = carrera
                break
            else:
                print('Error: La carrera solo puede contener letras y espacios.')
        return f'Ahora estudio {self.carrera}.'

    def nueva_universidad(self):
        while True:
            universidad = input('Ingrese una nueva universidad: ')
            if re.match("^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$", universidad):
                self.universidad = universidad
                break
            else:
                print('Error: La universidad solo puede contener letras y espacios.')
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
print ("")
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