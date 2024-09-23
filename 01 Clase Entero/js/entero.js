class Entero {
    //Atributos
    Num;
    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }
    //CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }
    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }
    //CLASS - Mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }
    incrementarNum(){
        this.Num = this.Num +1;
    }

    decrementarNum(){
        this.Num = this.Num -1;
    }

    esPar(){
        if(this.Num /2 !== 0){
            return true;
        }else{
            return false;
        }
    }

    esParImpar (){
        return (this.Num % 2 == 0)
    }

    esPositivo(){
        if (this.Num < 0){
            return true; 
        }else{
            return false;
        }    
    }

    esPosiNega(){
        return (this.Num > 0)
    }

    esFactorial() {
        let num = this.Num;
        if (num < 1) return false;  // Los números menores a 1 no son factoriales
        
        let i = 1;
        while (num > 1) {
            i++;
            if (num % i !== 0) {
                return false;
            }
            num /= i;
        }
        
        return true;
    }

    esPerfecto() {
        if (this.Num <= 0) return false; // Los números perfectos son positivos
        
        let suma = 0;
        
        // Encontrar los divisores propios y sumarlos
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                suma += i;
            }
        }
        
        // Verificar si la suma de los divisores es igual al número
        return suma === this.Num;
    }

        // Método para verificar si es un número de Armstrong
    esArmstrong() {
        let numStr = this.Num.toString();
        let numDigits = numStr.length;
        let suma = 0;

        for (let char of numStr) {
            suma += Math.pow(parseInt(char), numDigits);
        }

        return suma === this.Num;
    }
    esPrimo() {
        if (this.Num <= 1) {
            return false; // Los números menores o iguales a 1 no son primos
        }
        
        for (let i = 2; i <= Math.sqrt(this.Num); i++) {
            if (this.Num % i === 0) {
                return false; // Si se encuentra un divisor, no es primo
            }
        }
        
        return true; // Si no se encuentran divisores, es primo
    }

    // Método para calcular la fila N del triángulo de Pascal
    calcularFilaPascal() {
        let fila = [1];
        for (let i = 1; i <= this.Num; i++) {
            fila.push(fila[i - 1] * (this.Num - i + 1) / i);
        }
        return fila;
    }

    // Método para cifrar usando el cifrado César
    cifrarCesar(desplazamiento) {
        let cifrado = '';
        let strNum = this.Num.toString();
        for (let char of strNum) {
            let num = parseInt(char, 10);
            cifrado += ((num + desplazamiento) % 10).toString();
        }
        return cifrado;
    }

    // Método para determinar si tiene un primo gemelo
    tienePrimoGemelo() {
        if (!this.esPrimo()) return false;
        let gemelo1 = this.Num - 2;
        let gemelo2 = this.Num + 2;
        return (new Entero(gemelo1).esPrimo() || new Entero(gemelo2).esPrimo());
    }

    // Método para descomponer en factores primos
    descomponerEnFactoresPrimos() {
        let n = this.Num;
        let factores = {};
        let divisor = 2;
        while (n > 1) {
            while (n % divisor === 0) {
                if (factores[divisor]) {
                    factores[divisor]++;
                } else {
                    factores[divisor] = 1;
                }
                n /= divisor;
            }
            divisor++;
        }
        return factores;
    }

    // Método para calcular el número de Catalan
    calcularCatalan() {
        if (this.Num === 0) return 1;
        let catalan = 1;
        for (let i = 0; i < this.Num; i++) {
            catalan *= (2 * (2 * i + 1)) / (i + 2);
        }
        return catalan;
    }

    // Método para verificar si es un número de Mersenne
    esMersenne() {
        let p = Math.log2(this.Num + 1);
        return p % 1 === 0 && new Entero(p).esPrimo();
    }
}


//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum(){
    ClaseEntero.showNum();
}
 function incrementarValor(){
    ClaseEntero.incrementarNum()
    ClaseEntero.showNum();
 }

 function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
 }

 function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num par":"Es num Impar";
    ClaseEntero.showResultado(resp)
 }

 function esPosiNegaNum(){
    var respuesta = ClaseEntero.esPosiNega();
    var resp = respuesta ? "Es Num positivo":"Es num negativo";
    ClaseEntero.showResultado(resp)
 }

 function verificaFactorial(){
    var respuesta = ClaseEntero.esFactorial();
    var resp = respuesta ? "Es factorial": "No es factorial"
    ClaseEntero.showResultado(resp)
 }

 function verificarPerfecto(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es perfecto": "No es perfecto"
    ClaseEntero.showResultado(resp)
 }

 function verificaAmstrong(){
    var respuesta = ClaseEntero.esArmstrong();
    var resp = respuesta ? "Es numero de amnstrong":"No es numero de amnstrong"
    ClaseEntero.showResultado(resp)
 }

 function verificaPrimo(){ 
    var respuesta = ClaseEntero.esPrimo(); 
    var resp = respuesta ? "es primo": "no es primo"
    ClaseEntero.showResultado(resp)
 }

function filaPascal(){
    var respuesta = ClaseEntero.calcularFilaPascal();
    ClaseEntero.showResultado(`Fila ${ClaseEntero.getNum()} del triángulo de Pascal: [${respuesta.join(', ')}]`);
}

// Función para cifrar usando el cifrado César
function cifrarCesar(desplazamiento){
    var respuesta = ClaseEntero.cifrarCesar(desplazamiento);
    ClaseEntero.showResultado(`Cifrado César con desplazamiento ${desplazamiento}: ${respuesta}`);
}

// Función para verificar si tiene un primo gemelo
function verificarPrimoGemelo(){
    var respuesta = ClaseEntero.tienePrimoGemelo();
    var resp = respuesta ? "Tiene primo gemelo" : "No tiene primo gemelo";
    ClaseEntero.showResultado(resp);
}

// Función para descomponer en factores primos
function descomponerEnFactoresPrimos(){
    var factores = ClaseEntero.descomponerEnFactoresPrimos();
    let resultado = "";
    for (let factor in factores) {
        resultado += `${factor}^${factores[factor]} `;
    }
    ClaseEntero.showResultado(`Descomposición en factores primos: ${resultado.trim()}`);
}

// Función para calcular el número de Catalán
function calcularCatalan(){
    var respuesta = ClaseEntero.calcularCatalan();
    ClaseEntero.showResultado(`Número de Catalán para ${ClaseEntero.getNum()}: ${respuesta}`);
}

// Función para verificar si es un número de Mersenne
function verificarMersenne(){
    var respuesta = ClaseEntero.esMersenne();
    var resp = respuesta ? "Es un número de Mersenne" : "No es un número de Mersenne";
    ClaseEntero.showResultado(resp);
}