const palos = ["♠", "♥", "♦", "♣"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let mazo = [];

function crearMazo() {
  mazo = [];
  for (let palo of palos) {
    for (let valor of valores) {
      mazo.push(`${valor}${palo}`);
    }
  }
  mazo = mazo.sort(() => Math.random() - 0.5); // Mezcla
}

document.getElementById("mazo").addEventListener("click", () => {
  if (mazo.length === 0) {
    crearMazo();
  }
  const carta = mazo.pop();
  const imagenCarta = document.getElementById("imagenCarta");

  if (carta) {
    // Reemplazamos caracteres para nombres de archivos válidos
    const nombreArchivo = carta.replace("♠", "p").replace("♥", "c").replace("♦", "d").replace("♣", "t");
    imagenCarta.src = `cartas/${nombreArchivo}.png`;
  } else {
    imagenCarta.src = "cartas/reverso.png";
  }
});

crearMazo(); // Inicializa el mazo
