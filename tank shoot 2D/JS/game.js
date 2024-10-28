class Game{ 
    ancho; 
    alto; 
    cantColumnas; //valores calculados a partir de la cantidad de filas y columnas
    cantFilas; 
    estadoJuego;
    redondear

    constructor (_ancho, _alto, _estadoJuego){
        this.ancho = _ancho; 
        this.alto = _alto; 
        this.estadoJuego = _estadoJuego;

        var utilsObj = new Utils;
        this.cantColumnas = utilsObj.Redondear(this.ancho);
        this.cantFilas = utilsObj.Redondear(this.alto);
        console.log("cantColumnas", this.cantColumnas);
        console.log("cantFilas", this.cantFilas); 
    }

    start (){

    }

    reset(){
        
    }
}