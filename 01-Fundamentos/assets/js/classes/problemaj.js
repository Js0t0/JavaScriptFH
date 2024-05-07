const jef = {
  nombre: "Jefri",
  edad: "26",
  //Si el dato no está dentro del scope podemos llamarlo con this.dato
  imprimir() {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: "Pedro ",
  edad: 15,
  imprimir() {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`);
  },
};

const melissa = {
  nombre: "Melissa",
  edad: 35,
};

//El problema de repetir funciones o variables dentro de scopes diferentes.

function Persona(nombre, edad) {
  // this.nombre = nombre;
  console.log("se ejecutó esta linea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre:${this.nombre} - edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);
const melisa = new Persona("Melisa", 35);

// console.log(maria);
maria.imprimir();
melisa.imprimir();

//La problematica es que se necesita crear una instancia con la palabra new, era importante hacerlo y no lo decia en nigun lado.

//Apartir de estos problemas se cero CLASES
