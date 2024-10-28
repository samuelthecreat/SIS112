class Game{ 
    ancho; 
    alto; 
    cantColumnas; //valores calculados a partir de la cantidad de filas y columnas
    cantFilas; 
    anchoCelda;
    altoCelda;
    estadoJuego;
    

    constructor (_ancho, _alto, _estadoJuego){
        this.ancho = _ancho; 
        this.alto = _alto; 
        this.estadoJuego = _estadoJuego;

        var utilsObj = new Utils;
        this.cantColumnas = CANT_COLUMNAS;
        this.cantFilas = CANT_FILAS;
        this.anchoCelda = Math.round(this.ancho / this.cantColumnas);
        this.altoCelda = Math.round(this.alto / this.cantFilas);
        console.log("cantColumnas", this.cantColumnas);
        console.log("cantFilas", this.cantFilas); 
        console.log("anchoCelda", this.anchoCelda); 
        console.log("altoCelda", this.altoCelda);
    }

    start (){

    }

    reset(){
        
    }
}