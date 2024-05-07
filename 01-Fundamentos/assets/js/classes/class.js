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

const spiderman = new Persona(
  "Peter Parker",
  "Spideman",
  "Soy tu vecino spiderman"
);
const ironman = new Persona("Tony Stark", "Iron-Man", "Yo soy Iron Man");

// console.log(ironman);

// spiderman.quienSoy();
// ironman.quienSoy();

//Acá establecemos el set de comida
spiderman.setComidaFavorita = "El pie de cereza de la tía May";

//Es posible poder ingresar
// spiderman.comida = "Duende Verde";

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log("Conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);

console.log(ironman);
