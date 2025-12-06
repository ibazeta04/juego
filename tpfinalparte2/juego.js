class juego {
  constructor() {
    this.tiempoInicio = 0; //el this sirve para determinar a qué variable estás haciendo referencia.
    this.tiempoActual = 0;
    this.fondo = imgFondo[int(random(1, 3))];
    this.crearPersonaje();
    this.crearObstaculos();
    this.crearMonedas();
    this.puntos = 0; // contador de monedas
  }
  dibujar() {
    // Fondo para que no se corte la imagen
    let escala = max(width / this.fondo.width, height / this.fondo.height);
    let w = this.fondo.width * escala;
    let h = this.fondo.height * escala;

    imageMode(CENTER);
    image(this.fondo, width/2, height/2, w, h);
    imageMode(CORNER); // /árboles funcionen bien



    // tiempo en pantalla
    this.tiempoActual = int((millis() - this.tiempoInicio) / 1000);

    fill(0);
    textSize(20);
    text("Tiempo: " + this.tiempoActual, 10, 20);



    // personaje
    this.personaje.dibujar();

    // obstaculos
    for (let i = 0; i < 2; i++) {
      if (this.obstaculos[i]) {
        this.obstaculos[i].actualizar(); // se mueve hacia abajo
        this.obstaculos[i].dibujar();

        // 💥 Colisión con obstáculo
        //let d = dist(
        //  this.personaje.posX,
        //  this.personaje.posY,
        //  this.obstaculos[i].posX,
        //  this.obstaculos[i].posY );
      }
    }

    // monedas
    for (let i = 0; i < 5; i++) {
      if (this.monedas[i]) {
        this.monedas[i].actualizar(); // para qu avancen 
        this.monedas[i].dibujar();

        // Colisión con moneda
        //let d = dist(
        //  this.personaje.posX,
        //  this.personaje.posY,
        //  this.monedas[i].posX,
        //  this.monedas[i].posY );
        //if (d < 40) {
        // reposicionar moneda arriba
        //this.monedas[i].posY = random(-400, -50);
        //this.monedas[i].posX = random(100, width - 100);
        //this.puntos += 1; // suma 1 punto
        // }
      }
    }
    // Mostrar puntos
    fill(0);
    textSize(20);
    text("Puntos: " + this.puntos, 480, 20);
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < 3; i++) {
      this.obstaculos[i] = new obstaculo(i);
    }
  }
  crearMonedas() {
  this.monedas = [];
  let distancia = [600, 750, 900, 1050, 1200, 1350];

  // izquierda (fila 0)
  for (let z of distancia) {
    this.monedas.push(new moneda(0, z));
  }

  // centro (fila 1)
  for (let z of distancia) {
    this.monedas.push(new moneda(1, z));
  }

  // derecha (fila 2)
  for (let z of distancia) {
    this.monedas.push(new moneda(2, z));
  }
}

//  crearMonedas() {
//  this.monedas = [];
//  let distancias = [600, 750, 900, 1050, 1200, 1350];

//  for (let z of distancias) {
//    this.monedas.push(new moneda(0, z)); // izquierda
//  }
//  for (let z of distancias) {
//    this.monedas.push(new moneda(1, z)); // derecha
//  }
//}





//crearMonedas() {
//  this.monedas = [];

//  // Distancia hacia el fondo (z)
//  let distancia = [600, 750, 900, 1050, 1200, 1350];

//  // Fila izquierda (fila = 0)
//  for (let z of distancia) {
//    this.monedas.push(new moneda(0, z));
//  }

//  // Fila derecha (fila = 1)
//  for (let z of distancia) {
//    this.monedas.push(new moneda(1, z));
//  }
//}

  //crearMonedas() {
  //  this.monedas = [];
  //  for (let i = 0; i < 6; i++) {
  //    this.monedas[i] = new moneda();
  //  }
  //}

  crearPersonaje() {
    this.personaje = new personaje();
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}

//  dibujar () {
//    image(this.fondo, 0, 0, width, height);
//    this.personaje.dibujar();

//    // Dibuja obstáculos
//    for (let i = 0; i < 10; i++) {
//      if (this.obstaculos[i]) {
//        this.obstaculos[i].dibujar();
//      }
//    }

//    // Dibuja monedas
//    for (let i = 0; i < 10; i++) {
//      if (this.monedas[i]) {
//        this.monedas[i].dibujar();
//      }
//    }
//  }


//  iniciar() {
//  }
//  crearObstaculos() {
//  this.obstaculos = [];

//  // Punto base de donde empieza la fila de arboles
//let baseX = random(270, 285);  // centrado horizontalmente
// let baseY = random(350, 220); // vertical (parte baja visible)

//  for (let i = 0; i < 2; i++) { // cuántos arboles hay en la  fila
//    this.obstaculos[i] = new obstaculo(i, baseX, baseY);
//    //this.obstaculos = [];
//    //for (let i = 0; i < 4; i++) {
//    //  this.obstaculos[i] = new obstaculo();
//   }
//  }
//  crearMonedas() {
//    this.monedas = [];
//    for (let i = 0; i < 5; i++) {
//      this.monedas[i] = new moneda();
//    }
//  }

//  crearPersonaje() {
//    this.personaje = new personaje();
//  }
//  personajeGano() {
//  }

//  teclaPresionada(keyCode) {
//    this.personaje.teclaPresionada(keyCode);
//  }
//}
