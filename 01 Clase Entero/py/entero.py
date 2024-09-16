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
            print("9. Salir")

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
                print("¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente nuevamente.")

# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menú
numero.menu()