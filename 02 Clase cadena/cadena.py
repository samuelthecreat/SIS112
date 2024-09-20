import tkinter as tk
from tkinter import messagebox
class Cadena:
    def __init__(self, cadena=""):
        self.cadena = cadena

    # Obtener el valor de la cadena
    def get_cadena(self):
        return self.cadena

    # Manipulación de cadenas
    def concatenar(self, otra_cadena):
        self.cadena += otra_cadena

    def invertir(self):
        self.cadena = self.cadena[::-1]

    # Comparaciones
    def es_vacia(self):
        return len(self.cadena) == 0

    def contiene(self, subcadena):
        return subcadena in self.cadena

    def comienza_con(self, prefijo):
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):
        return self.cadena.endswith(sufijo)

    # Otras operaciones
    def longitud(self):
        return len(self.cadena)

    def a_mayusculas(self):
        return self.cadena.upper()

    def a_minusculas(self):
        return self.cadena.lower()


# Interfaz gráfica
def ejecutar(metodo):
    valor_input = input_cadena.get()
    if metodo == 'getCadena':
        resultado.set(f"Cadena: {cadena.get_cadena()}")
    elif metodo == 'concatenar':
        cadena.concatenar(valor_input)
        resultado.set(f"Cadena actual: {cadena.get_cadena()}")
    elif metodo == 'invertir':
        cadena.invertir()
        resultado.set(f"Cadena invertida: {cadena.get_cadena()}")
    elif metodo == 'esVacia':
        resultado.set(f"¿Es vacía?: {cadena.es_vacia()}")
    elif metodo == 'contiene':
        resultado.set(f"¿Contiene '{valor_input}'?: {cadena.contiene(valor_input)}")
    elif metodo == 'comienzaCon':
        resultado.set(f"¿Comienza con '{valor_input}'?: {cadena.comienza_con(valor_input)}")
    elif metodo == 'terminaCon':
        resultado.set(f"¿Termina con '{valor_input}'?: {cadena.termina_con(valor_input)}")
    elif metodo == 'longitud':
        resultado.set(f"Longitud: {cadena.longitud()}")
    elif metodo == 'aMayusculas':
        resultado.set(f"A mayúsculas: {cadena.a_mayusculas()}")
    elif metodo == 'aMinusculas':
        resultado.set(f"A minúsculas: {cadena.a_minusculas()}")
    else:
        messagebox.showerror("Error", "Método no reconocido.")

# Configuración de la interfaz gráfica
cadena = Cadena()
ventana = tk.Tk()
ventana.title("Manipulación de Cadenas")
ventana.geometry("1000x1000")

tk.Label(ventana, text="Ingrese una cadena o subcadena:").pack(pady=5)
input_cadena = tk.Entry(ventana, width=30)
input_cadena.pack(pady=5)

# Opciones de botones para las operaciones
botones = [
    ('Obtener Cadena', 'getCadena'),
    ('Concatenar', 'concatenar'),
    ('Invertir', 'invertir'),
    ('¿Es Vacía?', 'esVacia'),
    ('Contiene', 'contiene'),
    ('Comienza Con', 'comienzaCon'),
    ('Termina Con', 'terminaCon'),
    ('Longitud', 'longitud'),
    ('A Mayúsculas', 'aMayusculas'),
    ('A Minúsculas', 'aMinusculas')
]

# Crear los botones
for texto, metodo in botones:
    tk.Button(ventana, text=texto, command=lambda m=metodo: ejecutar(m)).pack(pady=5)

resultado = tk.StringVar()
tk.Label(ventana, textvariable=resultado, font=("Helvetica", 12)).pack(pady=10)

ventana.mainloop()