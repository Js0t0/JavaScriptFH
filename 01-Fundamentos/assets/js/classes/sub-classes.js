class Persona {
  //Propiedades de clase
  //Todas tienen el "use strict"

  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Hola a todos, soy un metodo estatico");
  }
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  //Los sets extricamente tienen que poner 1 argumento
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre}  es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  mifrase() {
    console.log(`${this.codigo}`);
  }
}

class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Los Avengers";
  }
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();

    //T0do que tenga que ver con "Super" tiene que ver con el padre
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spideman",
  "Soy tu vecino spiderman"
);

// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();
