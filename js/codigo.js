// Obtener el valor del parámetro 'nombre' de la URL
const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');

// Mostrar el nombre en el elemento con id="name"
if (nombre) {
  const nameElement = document.getElementById("name");
  document.getElementById("name").textContent = nombre;
  nameElement.style.color = "#FFFFFF";
} else {
  nombreElement=document.getElementById("name").textContent = "Invitado";
}



let palabraescondida = [];
let caracterespalabraaencontrar = [];
let letraencontrada = 0;
let letrasusadasincorrecta = [];
let letrasusadas = [];
let letrausada = false;
let index = 0;
let vida = 7;
let acertaas = [];
var palabraaencontrar = "";
let palabraAleatoria = [
  "vilas",
  "clerc",
  "federer",
  "nadal",
  "djokovic",
  "delpo",
  "wawrinka",
  "alcaraz",
  "tsitsipas",
  "ruud",
  "medvedev",
  "rune",
  "hurkacz",
];

//Elije la palabra random a descubrir
palabraaencontrar =
  palabraAleatoria[Math.floor(Math.random() * palabraAleatoria.length)];

//Esconde la palabra con guiones
for (i = 0; i < palabraaencontrar.length; i++) {
  caracterespalabraaencontrar.push(palabraaencontrar.substring(i, i + 1));
  palabraescondida[i] = " - ";
}
htmlcode =
  "<div> La palabra tiene " +
  palabraaencontrar.length +
  " letras:<br> </div>" +
  "<div class='escondida'>" +
  palabraescondida.join("") + //Le saco las comar
  " </div>";

//borrar esta linea  console.log(palabraescondida);
document.getElementById("muestrapalabra").innerHTML = htmlcode;
document.getElementById("titulo2").style.display = "none";
document.getElementById("palabraaencontrar").style.display = "none";
document.getElementById("button1").style.display = "none";
document.getElementById("reload").style.display = "none";
document.getElementById("muestraresultado").style.display = "none";

//******************* */
document.getElementById("button");
button.addEventListener("click", () => {
  if (palabraaencontrar.length != letraencontrada) {
    //Si da igual entonces la palabra ya se encontró
    var letraok = false;
    let letra = document.getElementById("letraaencontrar").value;
    letra = letra.toLowerCase();
    letrausada = false;

    // Chequea si la letra fue usada en letrasusadas o letras incorrectas
    if (letrasusadas.includes(letra) | letrasusadasincorrecta.includes(letra)) {
      document.getElementById("info").innerHTML =
        "No Wiilly la letra  " + letra + " ya la usaste, elegí otra <br>";
      letrausada = true;
    }

    //  Aca si la letra no fue usada y esta en los caracteres de la palabra entonces
    // guarda la letra en variables letrasusadas / reemplazo el caracter de la palabra escondida por la letra encontrada

    for (i = 0; i < palabraaencontrar.length; i++) {
      if (letra == caracterespalabraaencontrar[i] && letrausada !== true) {
        letrasusadas[i] = letra;
        letraencontrada = letraencontrada + 1;
        palabraescondida[i] = palabraescondida[i].replace(
          " - ",
          "<div class='escondida'>" + letra + "</div>"
        );
        acertaas[i] = letra;
        document.getElementById("letrasacertadas").innerHTML =
          "Acertadas <br>" + acertaas.join("");
        document.getElementById("info").innerHTML =
          "Bien ahí Roger, encontraste la letra <b>" + letra + "</b>";
        letraok = true;
        htmlcode =
          "<div> La palabra tiene " +
          palabraaencontrar.length +
          " letras:<br> " +
          palabraescondida.join("") +
          "</div>";
        document.getElementById("muestrapalabra").innerHTML = htmlcode;
        document.getElementById("usadas").innerHTML =
          "Usadas <br>" +
          letrasusadas.join("") +
          letrasusadasincorrecta.join("") +
          "<br>";
      }
    }
    //**************** */

    if (letraok == false && letrausada == false) {
      letrasusadasincorrecta[index] = letra;
      index = index + 1;
      vida = vida - 1;
      document.getElementById("image").src = "img/ahorcado" + vida + ".gif";
      document.getElementById("letraserradas").innerHTML =
        "Erradas <br>" + letrasusadasincorrecta.join("");
      document.getElementById("info").innerHTML =
        "MALA tenes una vida menos, te quedan " + vida + " vidas ";
      document.getElementById("usadas").innerHTML =
        "Usadas <br>" +
        letrasusadas.join("") +
        letrasusadasincorrecta.join("") +
        "<br>";
      if (vida == 0) {
        // document.getElementById("image").src = "fotoahorcado" + vida + ".jpg";
        document.getElementById("button").style.display = "none";
        document.getElementById("letraaencontrar").style.display = "none";
        document.getElementById("perdiste").innerHTML +=
          "Perdiste... seguí entrenando, la palabra era <span style='color: white;'>" +
          "|" +
          palabraaencontrar +
          "|";
        document.getElementById("reload").style.display = "";
        document.getElementById("muestraresultado").style.display = "";
      }
    }

    letraok = false;
    //***************** */

    //Aca chequeo si encontré todos los caracteres de la palabra que buscaba para saber si gane
    if (letraencontrada == palabraaencontrar.length) {
      document.getElementById("reload").style.display = "";
      let htmlcode =
        "Felicitaciones!!! descubriste la palabra escondida  <span style='color: white;'>" +
        "|" +
        palabraaencontrar +
        "|";
      ("</span> ¡Eres el Roger Federer de los ahorcados!");
      document.getElementById("ganaste").innerHTML += htmlcode;
      document.getElementById("muestraresultado").style.display = "";
      return letra;
    }
  }
});
