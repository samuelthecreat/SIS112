class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    llenarMatrizConUnos() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMarcoInterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[i][j] = 0; // Set border to 0
                } else {
                    this.matriz[i][j] = 1; // Set interior to 1
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarCruces() {
        this.vaciarMatriz();
        const midRow = Math.floor(this.filas / 2);
        const midCol = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === midCol || j === midRow) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarBordesDiagonales() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[i][j] = 1; // Borders
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2; // Diagonals
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarBandera() {
        this.vaciarMatriz();
        const filasPorFranja = Math.floor(this.filas / 3);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (j < filasPorFranja) {
                    this.matriz[j][i] = 1; // Primera franja
                } else if (j < filasPorFranja * 2) {
                    this.matriz[j][i] = 2; // Segunda franja
                } else {
                    this.matriz[j][i] = 0; // Tercera franja
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarRellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) 
                this.matriz[j][i] = j % 2;
                
            }
            this.dibujarMatriz();
        }

    llenarMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    llenarEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; // 0: right, 1: down, 2: left, 3: up
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: // Right
                    if (col + 1 >= this.columnas) {
                        break; // Prevent going out of bounds
                    }
                    col++;
                    break;
                case 1: // Down
                    if (row + 1 >= this.filas) {
                        break; // Prevent going out of bounds
                    }
                    row++;
                    break;
                case 2: // Left
                    if (col - 1 < 0) {
                        break; // Prevent going out of bounds
                    }
                    col--;
                    break;
                case 3: // Up
                    if (row - 1 < 0) {
                        break; // Prevent going out of bounds
                    }
                    row--;
                    break;
            }
        }
    
        this.dibujarMatriz();
    }

    llenarTrianguloSuperiorIzquierdo() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarTrianguloInferiorDerecho() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i + j >= this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    Cuadricula() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[j][i] = 1; 
                } else {
                    this.matriz[j][i] = j % 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    Piramide() {
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
    
        // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
            // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = 0; j < this.columnas; j++) {
                if (j >= inicio && j <= fin) {
                    this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
                } else {
                    this.matriz[i][j] = 0; // Resto en 0
                }
            }
        }
        this.dibujarMatriz();
    }
    
    crearRombosConcentricos() {
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
    
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[i][j] = 1; 
            }
        }
    
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; 
            }
        }
    
        this.dibujarMatriz();
    }

    llenarCrucesConcentricas() {
        this.vaciarMatriz();
        const midRow = Math.floor(this.filas / 2);
        const midCol = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === midCol || j === midRow || Math.abs(i - midCol) === Math.abs(j - midRow)) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarBandertrianguloderecha() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarCuadradoDentroDeCuadrado() {
        this.vaciarMatriz();
        const midRow = Math.floor(this.filas / 2);
        const midCol = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[i][j] = 1; // Outer square
                } else if (Math.abs(i - midCol) <= 1 && Math.abs(j - midRow) <= 1) {
                    this.matriz[i][j] = 2; // Inner square
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarBordesYCentro() {
        this.vaciarMatriz();
        const midRow = Math.floor(this.filas / 2);
        const midCol = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[i][j] = 1; // Border
                } else if (Math.abs(i - midCol) <= 2 && Math.abs(j - midRow) <= 2) {
                    this.matriz[i][j] = 2; // Center
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarLineasParalelas() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i === 0 || i === this.columnas - 1 || j === 0 || j === this.filas - 1) {
                    this.matriz[j][i] = 1; 
                } else {
                    this.matriz[j][i] = j % 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMarcasDeCruz() {
        this.vaciarMatriz();
        const interval = 3; // Adjust the interval as needed
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i % interval === 0 || j % interval === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarRomboDeEsquinas() {
        this.vaciarMatriz();
        const midRow = Math.floor(this.filas / 2);
        const midCol = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                if (i <= midCol && j <= midRow || i >= midCol && j >= midRow) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarAjedrez() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                this.matriz[i][j] = (i + j) % 2;
            }
        }
        this.dibujarMatriz();
    }

    llenarRelojDeArena() {
        this.vaciarMatriz();
        const centro = Math.floor(this.filas / 2);
        for (let i = 0; i <= centro; i++) {
            for (let j = i; j < this.columnas - i; j++) {
                this.matriz[i][j] = 1;
                this.matriz[this.filas - i - 1][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    /*llenarMatrizDiagonalReverso() {
        for (let i = 0 ; i < this.columnas; i++) {
            for (let j = 0; j< this.filas; j++) {
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizBordesinternos() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.

            // Segunda fila, excluyendo las esquinas
            if (i === 1 && j > 0 && j < this.columnas - 1) {
                this.matriz[i][j] = 2;
            }
            // Penúltima fila, excluyendo las esquinas
            else if (i === this.filas - 2 && j > 0 && j < this.columnas - 1) {
                this.matriz[i][j] = 2;
            }
            // Segunda columna, excluyendo las esquinas
            else if (j === 1 && i > 0 && i < this.filas - 1) {
                this.matriz[i][j] = 2;
            }
            // Penúltima columna, excluyendo las esquinas
            else if (j === this.columnas - 2 && i > 0 && i < this.filas - 1) {
                this.matriz[i][j] = 2;
            }
            // Si no se cumple ninguna de las condiciones anteriores, asigna 0
            else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
    }

    llenarMatrizCuatroBordes() {
        this.vaciarMatriz();
        const mitadCol = Math.floor(this.columnas / 2); 
        const mitadFil = Math.floor(this.filas / 2);

        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
                if (j == mitadCol){
                    this.matriz[i][j] = 2;
                }
                if (j == mitadCol-1){
                    this.matriz[i][j] = 2;   
                }
                if (i == mitadFil){
                    this.matriz[i][j] = 2;
                }
                if (i == mitadFil-1){
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j]
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }*/

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
         this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "1" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "2" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

}