//let pantallaPrincipal;
let objJuego;
let imgInicio;
let imgInstrucciones;
let imgCreditos;
let imgPerdiste;
let imgGanaste;
let imgFondo = [];
let imgPersonaje;
let imgObstaculos = [];
let imgMonedas = [];

function preload () {
  //musica de fondo
 musica = document.getElementById("sonido-cancion");
imgInicio = loadImage('data/inicio.png');
imgInstrucciones = loadImage('data/instrucciones.png');
imgCreditos = loadImage('data/creditos.png');
imgPerdiste = loadImage('data/perdiste.png');
imgGanaste = loadImage ('data/ganaste.png');

  // Fondo
  imgFondo[1] = loadImage('data/fondo1.png');
  imgFondo[2] = loadImage('data/fondo2.png');

  // Personaje
  imgPersonaje = loadImage('data/personaje.png');

  // Obstaculos
  imgObstaculos[1] = loadImage('data/arbol.png');
  imgObstaculos[2] = loadImage('data/arbol.png');
  imgObstaculos[3] = loadImage('data/arbol.png');


  //Monedas
  imgMonedas[1] = loadImage('data/moneda.png');
  imgMonedas[2] = loadImage('data/moneda.png');
  imgMonedas[3] = loadImage('data/moneda.png');
  imgMonedas[4] = loadImage('data/moneda.png');
}
function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
  objJuego.tiempoInicio = millis(); 
//  pantallaPrincipal = new Pantalla();

}

function draw() {
  console.log(mouseX + " / " + mouseY);
  background (255, 0, 255);
  objJuego.dibujar();
  musica.play();
//pantallaPrincipal.dibujar();  // ← muestra las pantallas del menú

  //if (pantallaPrincipal.estado === 0) {
    //objJuego.dibujar();         // ← cuando estado = 0 se muestra el juego
 // }
}
function keyPressed() {
  objJuego.teclaPresionada(keyCode);
   // primero las pantallas del menú
 // pantallaPrincipal.teclaPresionada(keyCode);  // ← CORRECTO

  // si estoy en el juego, el personaje se mueve
  //if (pantallaPrincipal.estado === 0) {
  //  objJuego.teclaPresionada(keyCode);
 // }
}
  
