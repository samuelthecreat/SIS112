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

    generarFibonacci() {
        let num = this.Num;
        let fibonacciSerie = [];
    
        if (num <= 0) {
            return []; // Si el número es menor o igual a 0, devuelve una serie vacía
        } else if (num === 1) {
            return [0]; // Si el número es 1, devuelve [0] como la serie de Fibonacci
        } else {
            fibonacciSerie = [0, 1]; // Inicializa la serie con los dos primeros números de Fibonacci
            for (let i = 2; i < num; i++) {
                fibonacciSerie.push(fibonacciSerie[i - 1] + fibonacciSerie[i - 2]);
            }
        }
    
        return fibonacciSerie;
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

 function mostrarFibonacci(){
    const numeroEntero = new Entero(5); // Por ejemplo, 5 elementos en la serie de Fibonacci
// Llamando a la función para mostrar la serie de Fibonacci
numeroEntero.mostrarFibonacci();
 }
