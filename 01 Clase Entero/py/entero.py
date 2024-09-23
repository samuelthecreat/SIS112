class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        # Assuming you have a way to get the input value in Python
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num

    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)

    def esPrimo(self):
        if self.Num <= 1:
            return False
        for i in range(2, int(self.Num ** 0.5) + 1):
            if self.Num % i == 0:
                return False
        return True
    
    def esPerfecto(self):
        if self.Num <= 0:
            return False
        suma_divisores = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num
    
    def generarFibonacci(self):
        if self.Num <= 0:
            return []
        elif self.Num == 1:
            return [0]
        elif self.Num == 2:
            return [0, 1]

        fibonacci = [0, 1]
        for _ in range(2, self.Num):
            siguiente = fibonacci[-1] + fibonacci[-2]
            fibonacci.append(siguiente)
        return fibonacci

    def esArmstrong(self):
        n = len(str(self.Num))
        suma = sum(int(d)**n for d in str(self.Num))
        return self.Num == suma

    def esPerfectoGeneralizado(self, k):
        suma_divisores = sum(i**k for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num

    def calcularFilaPascal(self):
        fila = [1]
        for i in range(1, self.Num+1):
            fila.append(fila[-1] * (self.Num - i + 1) // i)
        return fila

    def cifrarCesar(self, desplazamiento):
        resultado = ""
        for char in str(self.Num):
            if char.isdigit():
                nuevo_char = chr((ord(char) - ord('0') + desplazamiento) % 10 + ord('0'))
                resultado += nuevo_char
        return resultado

    def tienePrimoGemelo(self):
        if not self.esPrimo():
            return False
        return Entero(self.Num + 2).esPrimo() or Entero(self.Num - 2).esPrimo()

    def descomponerEnFactoresPrimos(self):
        n = self.Num
        factores = {}
        divisor = 2
        while n > 1:
            while n % divisor == 0:
                if divisor in factores:
                    factores[divisor] += 1
                else:
                    factores[divisor] = 1
                n //= divisor
            divisor += 1
        return factores

    def calcularCatalan(self):
        catalan = 1
        for i in range(1, self.Num + 1):
            catalan = catalan * (2 * i * (2 * i - 1)) // ((i + 1) * i)
        return catalan

    def esMersenne(self):
        if not self.esPrimo():
            return False
        potencia = 1
        while (2 ** potencia - 1) <= self.Num:
            if (2 ** potencia - 1) == self.Num:
                return True
            potencia += 1
        return False

    # Actualización del menú para incluir las nuevas funcionalidades
    def menu(self):
        while True:
            print("\nMenú:")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el número actual")
            print("3. Incrementar el número")
            print("4. Decrementar el número")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es primo")
            print("7. Verificar si es perfecto")
            print("8. Generar la serie de Fibonacci")
            print("9. Verificar si es un número de Armstrong")
            print("10. Verificar si es un número perfecto generalizado")
            print("11. Calcular fila del triángulo de Pascal")
            print("12. Cifrar número usando cifrado César")
            print("13. Verificar si tiene un primo gemelo")
            print("14. Descomponer en factores primos")
            print("15. Calcular número de Catalan")
            print("16. Verificar si es un número de Mersenne")
            print("17. Salir")

            opcion = input("Ingrese una opción: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El número es par.")
                else:
                    print("El número es impar.")
            elif opcion == '6':
                if self.esPrimo():
                    print("El número es primo.")
                else:
                    print("El número no es primo.")
            elif opcion == '7':
                if self.esPerfecto():
                    print("El número es perfecto.")
                else:
                    print("El número no es perfecto.")
            elif opcion == '8':
                fibonacci_serie = self.generarFibonacci()
                print(f"Serie de Fibonacci: {fibonacci_serie}")
            elif opcion == '9':
                if self.esArmstrong():
                    print("El número es un número de Armstrong.")
                else:
                    print("El número no es un número de Armstrong.")
            elif opcion == '10':
                k = int(input("Ingrese el valor de k: "))
                if self.esPerfectoGeneralizado(k):
                    print(f"El número es perfecto generalizado con respecto a {k}.")
                else:
                    print(f"El número no es perfecto generalizado con respecto a {k}.")
            elif opcion == '11':
                fila_pascal = self.calcularFilaPascal()
                print(f"Fila {self.Num} del triángulo de Pascal: {fila_pascal}")
            elif opcion == '12':
                desplazamiento = int(input("Ingrese el desplazamiento para el cifrado César: "))
                print(f"Número cifrado: {self.cifrarCesar(desplazamiento)}")
            elif opcion == '13':
                if self.tienePrimoGemelo():
                    print("El número tiene un primo gemelo.")
                else:
                    print("El número no tiene un primo gemelo.")
            elif opcion == '14':
                factores_primos = self.descomponerEnFactoresPrimos()
                print(f"Factores primos: {factores_primos}")
            elif opcion == '15':
                catalan = self.calcularCatalan()
                print(f"Número de Catalan: {catalan}")
            elif opcion == '16':
                if self.esMersenne():
                    print("El número es un número de Mersenne.")
                else:
                    print("El número no es un número de Mersenne.")
            elif opcion == '17':
                print("¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente nuevamente.")

# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menú
numero.menu()