let a = 10;
if (a > 10) {
  // undefined, null, una asignacion
  console.log("a es mayor a 10");
} else {
  console.log("no es");
}

// console.log("fin programa");

const hoy = new Date();
let dia = hoy.getDay();
const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log({ dia });

// if (dia === 0) {
//   console.log("Domingo");
// } else if (dia === 1) {
//   console.log("No es domingo ni Lunes");
// }

console.log(semana);

let fechahoy = semana[dia];
console.log(fechahoy);

const semana2 = {
  0: () => "Domingo-0",
  1: () => "Lunes-1",
  2: () => "Martes-2",
  3: () => "Miercoles-3",
  4: () => "Jueves-4",
  5: () => "Viernes-5",
  6: () => "Sabado-6",
};

let fechahoy2 = semana2[dia]();
console.log(fechahoy2);
