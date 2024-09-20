class Cadena{
    constructor(cadena){
        this.cadena = cadena; 
    }

    getCadena(){
        return this.cadena; 
    }

    cancatenar(otraCadena){
        this.cadena += otraCadena;
    }

    invertir(){
        let cadenaInvertida = '';
        for (let i = this.cadena.lenght -1; i >= 0; i--){
            cadenaInvertida += this.cadena[i];
        }
        this.cadena = cadenaInvertida; 
    }
    
    esVacia(){
        return this.cadena.lenght === 0; 
    }

    contiene(subcadena){
        return this.cadena.includes(subcadena);
    }

    comienzaCon(prefijo){
        return this.cadena.startsWith(prefijo);
    }

    terminaCon(sufijo){
        return this.cadena.endsWith(sufijo); 
    }

    longitud(){
        return this.cadena.lenght;
    }

    aMayusculas(){

    }

}