const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresafalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresafalse());

console.warn("And");
console.log(true && true);
console.log(true && false);
console.log(true && !false);
console.log(false && false);

console.log("===========");
console.log(regresafalse() && regresaTrue());
console.log(regresaTrue() && regresafalse());

console.log("=====&&=====");
regresafalse() && regresaTrue();

console.warn("OR");
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresafalse());
console.log("4 condiciones", true || true || true || false);

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && "Hola mundo" && 350;
const a2 =
  false || undefined || null || "Ya no soy falso" || "hola" || "mundo" || true;
soyFalso;
console.log({ a1, a2 });
