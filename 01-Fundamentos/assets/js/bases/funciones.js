//Definiendo una funcion con argumento
function saludar(name){
    console.log( arguments );
    console.log('Hola ' + name );
    return [1,2];
    // Esto nunca se va a imprimir
    console.log('Soy un codigo que está despues de return');
}



//Definiendo una funcion incognita
const saludar2 =  function saludar( name ){
    console.log('Hola '+ name );
}

//Definiendo una funcion usando flecha (lambda)
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

//Los parentesis de los argumentos son opcionales , buena practica es tenerlos
const saludarFlecha2 = (name) => {
    console.log('Hola ' + name);
} 

//Imprimiendo el return definiendo una variable constante

const retornoDeSaludar = saludar( 'Juan', 40, true, 'Costa Rica' ); 
console.log(retornoDeSaludar[0],retornoDeSaludar[1]);

// Creando una funcion en la forma mas tradicional
function sumar( a, b ){
        return a + b;
}

// CReando una funcion con flechas y usando return
const sumar2 = (a,b) => {
        return a + b;
}

// Creando una funcion con flechas de manera directa solo si dentro tenia RETURN
const sumar3 = (a,b) => a + b;

// Imprimiendo y probando las 3 maneras de crear funciones
console.log(sumar3(1,2));

// Creando una funcion de la manera tradicional para dar un numero aleartorio , se usa un MATH de windows
function getAleartorio(){
    return Math.random();
}

// Creando una funcion de la manera de flecha para dar un numero aleartorio , Se usa cons , porque no cambiaremos
// la manera de usar la funcion , con let se cambiaría pero no lo haremos así que usamos const
const getAleartorio2 = () => Math.random();

console.log(getAleartorio2());

