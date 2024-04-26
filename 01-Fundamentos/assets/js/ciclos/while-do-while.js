const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;
while (i < carros.length) {
  console.log(carros[i]);
  i++;
}

//undefined
// null
// false

while (carros[i]) {
  console.log(carros[i]);
  i++;
}

console.warn("Do while");
let j = 10;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
{
}
//Al menos imprime una opcion en este caso undefined

// carros[i] === i < carros.length
//Mientras carros tenga un valor
