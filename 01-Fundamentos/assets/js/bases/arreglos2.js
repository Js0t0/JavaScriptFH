let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];

// Poder ver el largo de los elementos
console.log("Largo: ", juegos.length);
// Poder ver un valor especifico depende de su posicion
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

// Hace un recorrido de cada elemento por indice en un array o lista.
juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

// Inserta un nuevo elemento al final del array y devuelve la longitud
// de la nueva lista.
let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

// Inserta un nuevo elemento al inicio del array y devuelve la longitud
// de la nueva lista
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

// Borra el ultimo elemento del array y lo retorna
let juegoborrado = juegos.pop();
console.log({ juegoborrado, juegos });

// Borra el primero elemento del array y lo retorna
let juegoborrado2 = juegos.shift();
console.log({ juegoborrado2, juegos });

// declara una variable para tener una posicion
let pos = 1;

console.log(juegos);
//Elimina valores con los indices , empezando y terminando
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// Encuentra el valor del indice del elemento , Si no encuentra el elemento arroja -1
let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex });
