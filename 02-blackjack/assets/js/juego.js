(() => {
  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];
  //Referencias del HTML
  const btnNuevoJuego = document.querySelector("#btnNuevo"),
    btnDetener = document.querySelector("#btnDetener"),
    btnPedir = document.querySelector("#btnPedir");

  const divCartasJugador = document.querySelector("#jugador-cartas"),
    divCartasComputadora = document.querySelector("#computadora-cartas"),
    puntosHTML = document.querySelectorAll("small");

  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
      // deck.push(i + "C");
    }
    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    // console.log(deck);

    deck = _.shuffle(deck);
  };

  crearDeck();

  const pedirCarta = () => {
    if (deck.length == 0) {
      throw "No hay cartas en el deck";
    }
    carta = deck.pop();

    return carta;
  };

  const detener = () => {};

  // pedirCarta();

  const valorCarta = (carta) => {
    //Substring nos devuelve
    const valor = carta.substring(0, carta.length - 1);

    let punto = valor === "A" ? 11 : isNaN(valor) ? 10 : valor * 1;

    return punto;
  };

  valorCarta("AD");

  const acumularPuntos = () => {};
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();

      puntosComputadora = puntosComputadora + valorCarta(carta);
      console.log(puntosComputadora);
      puntosHTML[1].innerText = puntosComputadora;

      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  };

  //Eventos
  btnNuevoJuego.addEventListener("click", function () {
    location.reload();
  });

  btnPedir.addEventListener("click", function () {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador);
      setTimeout(() => {
        alert("Lo Siento mucho , Perdiste");
      }, 10);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      setTimeout(() => {
        alert("21, Genial ");
      }, 10);
    }
  });

  btnDetener.addEventListener("click", function () {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    setTimeout(() => {
      if (puntosComputadora <= 21 && puntosComputadora > puntosJugador) {
        alert("Computadora ganó");
      } else if (puntosComputadora > 21) {
        alert("Jugador Ganó");
      } else if (puntosComputadora === puntosJugador) {
        alert("Empate!");
      }
    }, 10);
  });
})();

// Funcion Flecha
// const alv = () =>{

// }

//  Funcion Normal
// function alv(){
//   return
// }
