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