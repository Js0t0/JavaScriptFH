let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "HulkBuster"],
  direccion: {
    zip: "10880,0265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity-War",
};
// Imprime todos los valores del objeto
console.log(personaje);

// Imprime el valor en especifico del objeto
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad", personaje.edad);

// Imprime el valor en especifico del objeto e incluso un objeto valor especifico del objeto
console.log("Coors", personaje.coords);
console.log("Coors", personaje.coords.lat);

// Imprime el valor en especifico del objeto si es que es un array , se usa las funciones anteriores
console.log("No. Trajes", personaje.trajes.length);
console.log("Ultimo Traje", personaje.trajes[personaje.trajes.length - 1]);

// Para imprimir el valor boleano necesitamos llamar al valor boleano
const x = "vivo";
console.log("Vivo", personaje[x]);

// Para imprimir el valor si el valor es un string , se imprime de la siguiente manera
console.log("Ultima película", personaje["ultima-pelicula"]);

// Como eliminar valores de un objeto
delete personaje.edad;
console.log(personaje);

// Añadir valores
personaje.casado = true;

// Como convertir los valores en pares de arrays
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Recordar que el objeto no se puede modificar pero si sus valores internos

// Congela los valores internos (no se puede añadir ni eliminar) pero no congela los valores de los valores internos del objeto
Object.freeze(personaje);
delete personaje.direccion;
personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
