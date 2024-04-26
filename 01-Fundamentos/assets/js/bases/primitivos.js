
// String       > Una cadena de caracteres (Palabras)
let nombre = 'Peter Parker';
console.log(nombre);

nombre  = 'Jhon Holdman'; // Se prefiere poner comilla simple para 
                          // declarar strings
console.log(nombre);

nombre  = "Tía May";    // Se puede cambiar el valor de la variable , sin necesidad de volverla a nombrar
                    
nombre  = `Tía May`;

console.log( typeof nombre);

nombre  = 123;
console.log(nombre);
//---------------------------------------------------//


// Boolean      > true / false:

let esMarvel = false;   // true and false have to write in minusc.
console.log( typeof esMarvel);
//---------------------------------------------------//

// Number       > integers , floats , etc (en Js 1 == 1.00001):

let edad = 33;
console.log( typeof edad);

edad = 33.001;
console.log( typeof edad); // El navegador lo entiende como number asi sea entero o decimal ( int or flot in Py)
//---------------------------------------------------//

// Undefined    > Una variable declarada que aun no se le asigna valor:

let superPoderD;
console.log(typeof superPoderD); 
//---------------------------------------------------//

// Null         > Sin valor en lo absoluto:

let soyNull = null;
console.log(typeof soyNull); // Se trata como objeto 
//---------------------------------------------------//

// Symbol       > Es un valor único que no es igual a ningún otro valor:

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2); // Verificamos que cada simbolo creado es distinto
//---------------------------------------------------//