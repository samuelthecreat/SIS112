class Materia: 
    def __init__(self, nombremat, sigla, docente, horario, aula, prerequisito, carrera, universidad, inscritos, modulo, calificacion, temas, ubicacion):
        self.nombremat = nombremat
        self.sigla = sigla
        self.docente = docente
        self.horario = horario
        self.aula = aula 
        self.prerequisito = prerequisito
        self.carrera = carrera
        self.universidad = universidad
        self.inscritos = inscritos
        self.modalidad = modulo
        self.calificacion = calificacion
        self.temas = temas 
        self.ubi = ubicacion
        
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
    
    def modular(self): 
        return f"las clases se pasan de manera {self.modalidad}"
    
    def notaminima (self): 
        return f"la nota minima es de {self.calificacion}"
    
    def tema(self): 
        return f"los temas que se pasan en la materia son {self.temas}"
    
    def ubicacion(self): 
        return f"la ubicacion de la clase es {self.ubi}"
    
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
    
    def nueva_modalidad(self): 
        self.modalidad = input("¿Cual es la modalidad de la materia - sugerencia: presencial, virtual, hibrida")
        return f"ahora la modalidad es {self.modalidad}"
    
    def nueva_nota (self): 
        self.calificacion = input ("¿cual es la nueva nota minima? - sugerencia 51 a 60")
        return f"la nueva nota minima es {self.calificacion}"
    
    def nuevo_tema (self): 
        self.temas = input ("cuales son los nuevos temas")
        return f"los nuevos temas son {self.temas}"
    
    def nueva_ubi (self): 
        self.ubi = input ("cual es la nueva ubicacion - sugerencia (-17.69,-63.15)")
        return f"la ubicacion es {self.ubi}"
        
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
    
    def sin_modulo(self): 
        print ("la modalidad anterior ha cambiado a la actual")
        self.modalidad = ""
        return self.modalidad
    
    def sin_nota(self): 
        print ("la nota anterior ha sido modificada")
        self.calificacion = ""
        return self.calificacion
    
    def sin_tema(self): 
        print ("los temas de la anterior materia ya se han pasado")
        self.temas = ""
        return self.temas 
    
    def sin_ubi(self):
        print ("la ubicacion ingresada ha sido aceptada correctamente")
        self.ubi = ""
        return self.ubi
    
    
#creacion de instancia
materia1 = Materia(
    nombremat = "Programacion I",
    sigla = "SIS111", 
    docente = "Eddy",
    horario = "lunes de 11-12 y viernes de 11-13",
    aula = "laboratorio C2-2",
    prerequisito = "intro a progra",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "15",
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "programacion orientada a objetos", 
    ubicacion = "-17.69,-63.15"
    
)

materia2 = Materia(
    nombremat = "Manufactura",
    sigla = "IND112", 
    docente = "Jorge",
    horario = "martes, jueves y viernes de 7 a 9",
    aula = "Laboratorio de procesos",
    prerequisito = "intro a diseo industrial",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "15",
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "Fundicion, formado, soldadura, manufactura aditiva", 
    ubicacion = "-17.69,-63.15"
)

materia3 = Materia(
    nombremat = "Calculo I",
    sigla = "MAT142", 
    docente = "Tomas",
    horario = "lunes y miercoles de 14-16",
    aula = "Sala 12AN4",
    prerequisito = "Matematica basica",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "25",
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "Funciones, derivadas, limites, integrales", 
    ubicacion = "-17.69,-63.15"
)

materia4 = Materia(
    nombremat = "Antropologia",
    sigla = "FHC111", 
    docente = "Gabriela de la barra",
    horario = "martes y jueves 11-12 ",
    aula = "Sala E2-5",
    prerequisito = "ninguno",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "60",
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "Antropologia, Valores", 
    ubicacion = "-17.69,-63.15"
)

materia5 = Materia(
    nombremat = "Fisica I",
    sigla = "FIS111", 
    docente = "Chicho",
    horario = "Lunes 9-11 y miercoles",
    aula = "laboratorio C2-2",
    prerequisito = "intro a progra",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "40",
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "Magnitudes y vectores, cinematica, dinamica, mecanica", 
    ubicacion = "-17.69,-63.15"
)

materia6 = Materia(
    nombremat = "Estadistica",
    sigla = "MAT142", 
    docente = "Silvia",
    horario = "Martes y jueves de 11-12",
    aula = "laboratorio D2-1",
    prerequisito = "ninguno",
    carrera = "ingenieria indutrial",
    universidad= "Catolica Boliviana", 
    inscritos= "20", 
    modulo = "presencial, virtual, hibrida", 
    calificacion = "60", 
    temas = "organizacion de datos, tendencia, probabilidad, distribuciones", 
    ubicacion = "-17.69,-63.15"
)

#llamado de las funciones basicas
print("PRIMER MATERIA - PROGRAMACION I")
print(materia1.materia())
print(materia1.acronimo())         
print(materia1.profesor())         
print(materia1.hora())             
print(materia1.clase())         
print(materia1.requi())           
print(materia1.profesion())        
print(materia1.uni())              
print(materia1.compañeros())
print(materia1.modular())
print(materia1.notaminima())
print(materia1.tema())
print(materia1.ubicacion())

print("SEGUNDA MATERIA - MANUFACTURA")
print(materia2.materia())
print(materia2.acronimo())         
print(materia2.profesor())         
print(materia2.hora())             
print(materia2.clase())         
print(materia2.requi())           
print(materia2.profesion())        
print(materia2.uni())              
print(materia2.compañeros())
print(materia2.modular())
print(materia2.notaminima())
print(materia2.tema())
print(materia2.ubicacion())

print("TERCER MATERIA - CALCULO I")
print(materia3.materia())
print(materia3.acronimo())         
print(materia3.profesor())         
print(materia3.hora())             
print(materia3.clase())         
print(materia3.requi())           
print(materia3.profesion())        
print(materia3.uni())              
print(materia3.compañeros())
print(materia3.modular())
print(materia3.notaminima())
print(materia3.tema())
print(materia3.ubicacion())

print("CUARTA MATERIA - ANTROPOLOGIA")
print(materia4.materia())
print(materia4.acronimo())         
print(materia4.profesor())         
print(materia4.hora())             
print(materia4.clase())         
print(materia4.requi())           
print(materia4.profesion())        
print(materia4.uni())              
print(materia4.compañeros())
print(materia4.modular())
print(materia4.notaminima())
print(materia4.tema())
print(materia4.ubicacion())

print("QUINTA MATERIA - FISICA I")
print(materia5.materia())
print(materia5.acronimo())         
print(materia5.profesor())         
print(materia5.hora())             
print(materia5.clase())         
print(materia5.requi())           
print(materia5.profesion())        
print(materia5.uni())              
print(materia5.compañeros())
print(materia5.modular())
print(materia5.notaminima())
print(materia5.tema())
print(materia5.ubicacion())

print("SEXTA MATERIA - ESTADISTICA I")
print(materia6.materia())
print(materia6.acronimo())         
print(materia6.profesor())         
print(materia6.hora())             
print(materia6.clase())         
print(materia6.requi())           
print(materia6.profesion())        
print(materia6.uni())              
print(materia6.compañeros())
print(materia6.modular())
print(materia6.notaminima())
print(materia6.tema())
print(materia6.ubicacion())

#funciones de modificacion
print("PRIMER MATERIA - PROGRAMACION I")
print(materia1.nueva_materia())
print(materia1.nueva_acronimo())    
print(materia1.nuevo_docente())    
print(materia1.nuevo_horario())   
print(materia1.nueva_aula())
print(materia1.nuevo_prerequisito()) 
print(materia1.nueva_carrera())   
print(materia1.nueva_universidad()) 
print(materia1.nuevos_inscritos())
print(materia1.nueva_modalidad())
print(materia1.nueva_nota())
print(materia1.nuevo_tema())
print(materia1.nueva_ubi())

print("SEGUNDA MATERIA - MANUFACTURA")
print(materia2.nueva_materia())
print(materia2.nueva_acronimo())    
print(materia2.nuevo_docente())    
print(materia2.nuevo_horario())   
print(materia2.nueva_aula())
print(materia2.nuevo_prerequisito()) 
print(materia2.nueva_carrera())   
print(materia2.nueva_universidad()) 
print(materia2.nuevos_inscritos())

print("TERCER MATERIA - CALCULO I")
print(materia3.nueva_materia())
print(materia3.nueva_acronimo())    
print(materia3.nuevo_docente())    
print(materia3.nuevo_horario())   
print(materia3.nueva_aula())
print(materia3.nuevo_prerequisito()) 
print(materia3.nueva_carrera())   
print(materia3.nueva_universidad()) 
print(materia3.nuevos_inscritos())

print("CUARTA MATERIA - ANTROPOLOGIA")
print(materia4.nueva_materia())
print(materia4.nueva_acronimo())    
print(materia4.nuevo_docente())    
print(materia4.nuevo_horario())   
print(materia4.nueva_aula())
print(materia4.nuevo_prerequisito()) 
print(materia4.nueva_carrera())   
print(materia4.nueva_universidad()) 
print(materia4.nuevos_inscritos())

print("QUINTA MATERIA - FISICA I")
print(materia5.nueva_materia())
print(materia5.nueva_acronimo())    
print(materia5.nuevo_docente())    
print(materia5.nuevo_horario())   
print(materia5.nueva_aula())
print(materia5.nuevo_prerequisito()) 
print(materia5.nueva_carrera())   
print(materia5.nueva_universidad()) 
print(materia5.nuevos_inscritos())

print("SEXTA MATERIA - ESTADISTICA I")
print(materia6.nueva_materia())
print(materia6.nueva_acronimo())    
print(materia6.nuevo_docente())    
print(materia6.nuevo_horario())   
print(materia6.nueva_aula())
print(materia6.nuevo_prerequisito()) 
print(materia6.nueva_carrera())   
print(materia6.nueva_universidad()) 
print(materia6.nuevos_inscritos())

#funciones de eliminacion
print("PRIMER MATERIA - PROGRAMACION I")
print(materia1.sin_materia())     
print(materia1.sin_sigla())        
print(materia1.sin_docente())     
print(materia1.sin_horario())      
print(materia1.sin_aula())         
print(materia1.sin_prerequisito()) 
print(materia1.sin_carrera())     
print(materia1.sin_universidad())  
print(materia1.sin_inscritos())

print("SEGUNDA MATERIA - MANUFACTURA")
print(materia2.sin_materia())     
print(materia2.sin_sigla())        
print(materia2.sin_docente())     
print(materia2.sin_horario())      
print(materia2.sin_aula())         
print(materia2.sin_prerequisito()) 
print(materia2.sin_carrera())     
print(materia2.sin_universidad())  
print(materia2.sin_inscritos())

print("TERCER MATERIA - CALCULO I")
print(materia3.sin_materia())     
print(materia3.sin_sigla())        
print(materia3.sin_docente())     
print(materia3.sin_horario())      
print(materia3.sin_aula())         
print(materia3.sin_prerequisito()) 
print(materia3.sin_carrera())     
print(materia3.sin_universidad())  
print(materia3.sin_inscritos())

print("CUARTA MATERIA - ANTROPOLOGIA")
print(materia4.sin_materia())     
print(materia4.sin_sigla())        
print(materia4.sin_docente())     
print(materia4.sin_horario())      
print(materia4.sin_aula())         
print(materia4.sin_prerequisito()) 
print(materia4.sin_carrera())     
print(materia4.sin_universidad())  
print(materia4.sin_inscritos())

print("QUINTA MATERIA - FISICA I")
print(materia5.sin_materia())     
print(materia5.sin_sigla())        
print(materia5.sin_docente())     
print(materia5.sin_horario())      
print(materia5.sin_aula())         
print(materia5.sin_prerequisito()) 
print(materia5.sin_carrera())     
print(materia5.sin_universidad())  
print(materia5.sin_inscritos())

print("SEXTA MATERIA - ESTADISTICA I")
print(materia6.sin_materia())     
print(materia6.sin_sigla())        
print(materia6.sin_docente())     
print(materia6.sin_horario())      
print(materia6.sin_aula())         
print(materia6.sin_prerequisito()) 
print(materia6.sin_carrera())     
print(materia6.sin_universidad())  
print(materia6.sin_inscritos())