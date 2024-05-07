import { pedirCarta, valorCarta } from './';

// turno de la computadora

/**
 *
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento para mostrar cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios');
  if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana');
    }
  }, 100);
};
