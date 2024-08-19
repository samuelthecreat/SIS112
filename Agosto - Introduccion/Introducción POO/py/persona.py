class Persona:
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
    
    def saludar(self):
        print (f"hola mi nombre es {self.nombre} y tengo {self.edad} años.")
        
    def cumpleaños(self):
        self.edad += 1
        print (f" ¡Feliz cumpleaños! ahora tengo {self.edad} años.")
    
    def estudiar (self):
        print (f"Estoy estudiando {self.carrera}.")

#crear una instancia de la clase persona
persona1 = Persona ("Juan", 20, "Medicina")

#llamar a los metodos
persona1.saludar()
persona1.estudiar()
