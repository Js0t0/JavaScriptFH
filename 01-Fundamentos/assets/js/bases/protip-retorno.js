//Si la propiedad es la misma que la variable , podemos resumirlo así:
function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

// Aplicamos funcion con flecha y resumido por tener solo return en la funcion:
const crearPersona2 = (nombre, apellido) => {
  nombre, apellido;
};

const persona = crearPersona("Jefri", "Soto");
const persona2 = crearPersona("Jefri", "Soto");
console.log(persona);
console.log(persona2);

//Si deseamos definir una funcion para imprimir solo los argumentos utilizamos arguments
function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "Fernando", "Hola");

//Si queremos usar la funcion con flecha aplicamos ''...'' (Ref parametro REST)
//CONSIDERACIONES PARA EL PARAMETRO REST
//-Despues del parametro ...args no puede haber ningun otro parametro (error)
//-Si colocamos un argumento antes , ese argumento sería independiente y tendria su propio valor
const imprimeArgumentos2 = (edad, ...args) => {
  // console.log( edad, args );
  // con return solo devuelve los argumentos args
  return args;
};

const argumentos = imprimeArgumentos2(10, true, false, "Fernando", "Hola");
console.log(argumentos);

//Si necesitamos llamar los valores de los argumentos podrias hacerlo de esta forma
//Recordar que edad ya tiene su propio valor
const imprimeArgumentos3 = (edad, ...args) => {
  // console.log( edad, args );
  // con return solo devuelve los argumentos args
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos3(
  10,
  true,
  false,
  "Fernando",
  "Hola"
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApeliido } = crearPersona("Jefri", "Soto");
console.log({ nuevoApeliido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  // edad: 40,
  trajes: ["Mark I", "Mark V", "HulkBuster"],
};
// Si es que no se encuentra algun argumento en el objeto principal , se puede dar un valor al argumento
// de manera directa , si no tendríamos que validar 1 x 1
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
