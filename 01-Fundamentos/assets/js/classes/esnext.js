class Rectangulo {
  //Metodos privados ya está activo para su uso "#"
  #areareal = 0;
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#areareal = base * altura;
  }
  calcularArea() {
    console.log(this.#areareal * 2);
  }
}

const rectangulo = new Rectangulo(10, 25);

rectangulo.calcularArea();
console.log(rectangulo);
