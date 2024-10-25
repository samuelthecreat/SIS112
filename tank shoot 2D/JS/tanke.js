class tank{ 
    posX; 
    posY; 
    direccionDisparo; 
    vidas; 
    velocidad;
    anchoMapa; 
    altoMapa;

    constructor( _posX, _posY, _direccionDisparo, _vidas){
        this.posX = _posX; 
        this.posY = _posY; 
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas; 
        this.velocidad = 50;
        this.anchoMapa 
        this.altoMapa 
    }

    moveLeft(){
        this.posX = this.posX - this.velocidad;
    }

    moveRight(){
        this.posX = this.posX + this.velocidad;
    }
    
    moveUp(){
        this.posY -= this.velocidad;
    }

    moveDown(){
        this.posY -= this.velocidad; 
    }

    rotarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo; 
    }
}