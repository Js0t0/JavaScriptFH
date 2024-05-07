class Singleton {
  static instancia; //
  nombre = "";

  constructor(nombre = "") {
    //Cuando negamos undefined estamos volviendolo TRUE , si negamos true volvemos FALSE
    // const a = undefined;
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new Singleton("IronMan");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("BlackPanther");

console.log(`Nombre en la instancia 1 es ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es ${instancia3.nombre}`);
