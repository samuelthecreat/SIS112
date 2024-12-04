import pandas as pd
import matplotlib.pyplot as plt

# Suponiendo que los datos están en un archivo CSV llamado "datos.csv"
df = pd.read_csv("datos.csv")

# Crear una tabla de contingencia
contingency_table = pd.crosstab(df['Carga laboral o responsabilidades externas'], df['Dificultades académicas'])

# Crear el gráfico de barras apiladas
contingency_table.plot(kind='bar', stacked=True)
plt.title('Relación entre Carga Laboral y Dificultades Académicas')
plt.xlabel('Carga Laboral o Responsabilidades Externas')
plt.ylabel('Frecuencia')
plt.show()