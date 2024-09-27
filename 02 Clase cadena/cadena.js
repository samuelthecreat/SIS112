class Cadena {
    constructor(cadena) {
      this.cadena = cadena;
    }
    getCadena() { //Obtiene el valor asignado a la cadena
      return this.cadena;
    }
    // Manipulación de cadenas
    concatenar(otraCadena) {  //Unir una cadena con otra
      this.cadena += otraCadena;
    }
    invertir() { //Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
    }


    // Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
    }
    contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
    }
    comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
    }
    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
    }
    // Otras operaciones
    longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
    }
    aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
      return this.cadena.toUpperCase();
    }
    aMinusculas() { //Obtiene la cadena transformada en minuscula
      return this.cadena.toLowerCase();
    }
            // Conversión a números romanos
    convertirANumerosRomanos() {
      const numero = parseInt(this.cadena, 10);
      if (isNaN(numero) || numero <= 0) {
        return "Número inválido. Ingrese un número entero positivo.";
      }

    const valoresRomanos = [
      { valor: 1000, simbolo: 'M' },
      { valor: 900, simbolo: 'CM' },
      { valor: 500, simbolo: 'D' },
      { valor: 400, simbolo: 'CD' },
      { valor: 100, simbolo: 'C' },
      { valor: 90, simbolo: 'XC' },
      { valor: 50, simbolo: 'L' },
      { valor: 40, simbolo: 'XL' },
      { valor: 10, simbolo: 'X' },
      { valor: 9, simbolo: 'IX' },
      { valor: 5, simbolo: 'V' },
      { valor: 4, simbolo: 'IV' },
      { valor: 1, simbolo: 'I' }
    ];
    let resultado = '';
    let numeroRestante = numero;

    for (let i = 0; i < valoresRomanos.length; i++) {
      while (numeroRestante >= valoresRomanos[i].valor) {
        resultado += valoresRomanos[i].simbolo;
        numeroRestante -= valoresRomanos[i].valor;
      }
    }

    return resultado;
  }
  // Generación de texto aleatorio
  generarTextoAleatorio(cantidadPalabras) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const palabrasGeneradas = [];

    for (let i = 0; i < cantidadPalabras; i++) {
      let palabraAleatoria = '';
      const longitudPalabra = Math.floor(Math.random() * 10) + 1; // Longitud aleatoria entre 1 y 10 caracteres

      for (let j = 0; j < longitudPalabra; j++) {
        const indiceCaracterAleatorio = Math.floor(Math.random() * caracteres.length);
        palabraAleatoria += caracteres[indiceCaracterAleatorio];
      }

      palabrasGeneradas.push(palabraAleatoria);
    }

    this.cadena = palabrasGeneradas.join(' '); // Unimos las palabras con un espacio
    return this.cadena;
  }
  // Conversión a tabla ASCII
  convertirATablaASCII() {
    const numeros = this.cadena.split(' ').map(num => parseInt(num, 10));
    const caracteresASCII = [];

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] >= 0 && numeros[i] <= 127) {
        caracteresASCII.push(String.fromCharCode(numeros[i]));
      } else {
        caracteresASCII.push('?'); // Si está fuera del rango ASCII, lo manejamos con un símbolo '?'
      }
    }

    this.cadena = caracteresASCII.join('');
    return this.cadena;
  }
  }
  
  let cadena = new Cadena('');
  function ejecutar(metodo) {
    const input = document.getElementById('inputCadena');
    const resultadoDiv = document.getElementById('resultado');
    const valorInput = input.value;
    switch (metodo) {
      case 'getCadena':
        resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
        break;
      case 'concatenar':
        cadena.concatenar(valorInput);
        resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
        break;
      case 'invertir':
        cadena.invertir();
        resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
        break;
      case 'esVacia':
        resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
        break;
      case 'contiene':
        resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
        break;
      case 'comienzaCon':
        resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
        break;
      case 'terminaCon':
        resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
        break;
      case 'longitud':
        resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
        break;
      case 'aMayusculas':
        resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
        break;
      case 'aMinusculas':
        resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
        break;
      case 'convertirANumerosRomanos':
        resultadoDiv.innerHTML = `Número romano: ${cadena.convertirANumerosRomanos()}`;
        break;
      case 'generarTextoAleatorio':
        const cantidadPalabras = parseInt(valorInput, 10);
        resultadoDiv.innerHTML = `Texto aleatorio: ${cadena.generarTextoAleatorio(cantidadPalabras)}`;
        break;
      case 'convertirATablaASCII':
        resultadoDiv.innerHTML = `Tabla ASCII: ${cadena.convertirATablaASCII()}`;
        break;
      default:
          resultadoDiv.innerHTML = 'Método no reconocido.';
    }
  }