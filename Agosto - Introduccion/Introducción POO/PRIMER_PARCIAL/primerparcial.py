class Materia: 
    def __init__(self, nombremat, sigla, docente, horario, aula, prerequisito, carrera, universidad, inscritos):
        self.nombremat = nombremat
        self.sigla = sigla
        self.docente = docente
        self.horario = horario
        self.aula = aula 
        self.prerequisito = prerequisito
        self.carrera = carrera
        self.universidad = universidad
        self.inscritos = inscritos
        
    #funciones de creacion    
    def materia(self): 
        return f"La materia que estoy cursando es {self.nombremat}"
    
    def acronimo(self): 
        return f"La sigla de la materia es {self.sigla}"
    
    def profesor(self):
        return f"el docente de la materia es {self.docente}"
    
    def hora(self): 
        return f"los horarios de la mataria son {self.horario}"
    
    def clase(self): 
        return f"la aula de la materia es {self.aula}"
    
    def requi(self): 
        return f"se requiere de haber pasado {self.prerequisito}"
    
    def profesion(self): 
        return f"estoy en la carrera de {self.carrera}"
    
    def uni (self): 
        return f"estoy en la universidad {self.universidad}"
        
    def compañeros(self): 
        return f"hay {self.inscritos} inscritos en {self.nombremat}"
    
    #funciones de modificacion
    def nueva_materia(self): 
        self.nombremat = input ("su nueva materia es:")
        return f"ahora curso la materia de {self.nombremat}"
    
    def nueva_acronimo(self):
        self.sigla = input("¿Cuál es la nueva sigla de la materia?")
        return f"La nueva sigla de la materia es {self.sigla}"

    def nuevo_docente(self):
        self.docente = input("¿Quién es el nuevo docente?")
        return f"El nuevo docente de la materia es {self.docente}"

    def nuevo_horario(self):
        self.horario = input("¿Cuál es el nuevo horario de la materia?")
        return f"El nuevo horario de la materia es {self.horario}"

    def nueva_aula(self):
        self.aula = input("¿Cuál es el nuevo aula de la materia?")
        return f"El nuevo aula de la materia es {self.aula}"

    def nuevo_prerequisito(self):
        self.prerequisito = input("¿Cuál es el nuevo prerequisito?")
        return f"Ahora se requiere haber pasado {self.prerequisito}"

    def nueva_carrera(self):
        self.carrera = input("¿Cuál es la nueva carrera?")
        return f"Ahora estoy en la carrera de {self.carrera}"

    def nueva_universidad(self):
        self.universidad = input("¿Cuál es la nueva universidad?")
        return f"Ahora estoy en la universidad {self.universidad}"

    def nuevos_inscritos(self):
        self.inscritos = input("¿Cuántos inscritos hay ahora?")
        return f"Ahora hay {self.inscritos} inscritos en {self.nombremat}"
    
    #funciones de eliminacion
    def sin_materia(self):
        print ("su anterior materia ha sido retirada")
        self.nombremat = ""
        return self.nombremat 
    
    def sin_sigla(self):
        print("La sigla de la anterior materia ha sido retirada")
        self.sigla = ""
        return self.sigla

    def sin_docente(self):
        print("El docente de la anterior materia ha sido retirado")
        self.docente = ""
        return self.docente

    def sin_horario(self):
        print("El horario de la anterior materia ha sido retirado")
        self.horario = ""
        return self.horario

    def sin_aula(self):
        print("El aula de la anterior materia ha sido retirada")
        self.aula = ""
        return self.aula

    def sin_prerequisito(self):
        print("El prerequisito de la anterior materia ha sido retirado")
        self.prerequisito = ""
        return self.prerequisito

    def sin_carrera(self):
        print("La carrera ha sido retirada")
        self.carrera = ""
        return self.carrera

    def sin_universidad(self):
        print("La anterior universidad ahora esta en refaccion")
        self.universidad = ""
        return self.universidad

    def sin_inscritos(self):
        print("La cantidad de inscritos ha pasado al nuevo curso")
        self.inscritos = ""
        return self.inscritos
    
#creacion de instancia
materia1 = Materia(
    nombremat = "Programacion I",
    sigla = "SIS111", 
    docente = "Eddy",
    horario = "lunes de 10-12 y viernes de 10-13",
    aula = "laboratorio C2-2",
    prerequisito = "intro a progra",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "15"
)

#llamado de las funciones basicas
print(materia1.materia())
print(materia1.acronimo())         
print(materia1.profesor())         
print(materia1.hora())             
print(materia1.clase())         
print(materia1.requi())           
print(materia1.profesion())        
print(materia1.uni())              
print(materia1.compañeros())


print (materia1.nueva_materia())
print(materia1.nueva_acronimo())      
print(materia1.nuevo_docente())    
print(materia1.nuevo_horario())   
print(materia1.nueva_aula())       
print(materia1.nuevo_prerequisito()) 
print(materia1.nueva_carrera())   
print(materia1.nueva_universidad()) 
print(materia1.nuevos_inscritos())

print (materia1.sin_materia())     
print(materia1.sin_sigla())        
print(materia1.sin_docente())     
print(materia1.sin_horario())      
print(materia1.sin_aula())         
print(materia1.sin_prerequisito()) 
print(materia1.sin_carrera())     
print(materia1.sin_universidad())  
print(materia1.sin_inscritos())
