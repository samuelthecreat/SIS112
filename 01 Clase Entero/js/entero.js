class Entero {
    Num;

    constructor(Num){
        this.Num = numero;
    }
//class cargar el valor de numero
    setNum(){
        this.Num = 10;
    }
//obtener el valor del numero
    getNum() {
    return this.Num;    
    }
//obtener el valor del numero
    showNum(){
        const resultado = document.getElementById("resultado");
        resultado.textContent = this.getNum();
    }

}
var ClaseEntero = new Entero(0);

function cargarNum(){
    ClaseEntero.setNum();
}

function mostrarNum(){
    ClaseEntero.showNum
}