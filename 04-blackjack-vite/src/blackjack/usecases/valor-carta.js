/**
 * Esta funcion devuelve el valor de la carta
 * @param {string} carta es un valor string que luego se convierte a num * 1
 * @returns {number}
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
