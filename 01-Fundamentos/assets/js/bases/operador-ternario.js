let dia = 0;
let horaActual = 8;
let horaApertura;
// el metodo includes(name) : ayuda a saber si dentro del array está incluido "name" y devuelve true si está y false si no.

// if ([0, 6].includes(dia)) {
//   console.log("Fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Dia de semana");
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Está abierto";
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =
  horaActual >= horaApertura
    ? "Está abierto"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
