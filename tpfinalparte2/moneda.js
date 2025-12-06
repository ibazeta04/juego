class moneda {
  constructor(fila, zInicial) {

    // fila puede ser 0, 1 o 2 (si viene 0 ó 1 desde tu código viejo, igual funciona)
    this.fila = fila;

    // convertir fila → carril en X
    if (fila === 0)      this.x = -180;  // izquierda
    else if (fila === 1) this.x = 0;     // centro
    else                 this.x = 180;   // derecha

    // Z inicial (profundidad)
    this.z = zInicial;

    this.y = 50; 
    this.img = imgMonedas[int(random(1, 5))];
  }

  reset() {
    // reaparece atrás
    this.z = 1500;

    // elegir un carril nuevo al azar
    let nuevaFila = int(random(0, 3));
    if (nuevaFila === 0)      this.x = -180;
    else if (nuevaFila === 1) this.x = 0;
    else                      this.x = 180;

    this.fila = nuevaFila;
  }

  actualizar() {
    this.z -= 6;
    if (this.z < 80) this.reset();
  }

  dibujar() {
    let escala = 300 / this.z;
    let pantallaX = width/2 + this.x * escala;
    let pantallaY = height/2 + this.y * escala;
    let tamaño = 60 * escala;

    imageMode(CENTER);
    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
  }
}







//class moneda {
//  constructor(fila, zInicial) {
//    this.fila = fila;      
//    this.z = zInicial;     

//    // IF / ELSE 
//    if (fila === 0) {
//      this.x = -120;  // izquierda
      
//  //} else {
//  //   this.x = 120;   // derecha
//  }

//    this.y = 100;
//    this.img = imgMonedas[int(random(1, 5))];
//  }

//  reset() {
//    this.z = 1500;
//  }

//  actualizar() {
//    this.z -= 6;

//    if (this.z < 80) {
//      this.reset();
//    }
//  }

//  dibujar() {
//    let escala = 300 / this.z;
//    let pantallaX = width/2 + this.x * escala;
//    let pantallaY = height/2 + this.y * escala;
//    let tamaño = 60 * escala;

//    imageMode(CENTER);
//    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
//  }
//}

//class moneda {
//  constructor() {
//    this.reset();
//    this.img = imgMonedas[int(random(1, 5))];
//  }

//  reset() {
//    this.x = random(-200, 200);   // izquierda / derecha
//    this.y = random(-0, 200);   // altura
//    this.z = random(600, 1500);   // qué tan lejos aparece
//  }

//  actualizar() {
//    this.z -= 8; // velocidad hacia adelante

//    if (this.z < 80) {
//      this.reset(); // vuelve al fondo
//    }
//  }

//  dibujar() {
//    let escala = 300 / this.z;         // más cerca = más grande
//    let pantallaX = width/2 + this.x * escala;
//    let pantallaY = height/2 + this.y * escala;
//    let tamaño = 60 * escala;

//    imageMode(CENTER);
//    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
//  }
//}






//class moneda {
//  constructor() {
//    this.posX = random(0, width);
//    this.posY = random(height / 2, height - 20);
//    this.img = imgMonedas[int(random(1, 5))]; //  se selecciona 1, 2, 3 o 4
//  }

//  dibujar() {
//    image(this.img, this.posX, this.posY, 50, 50);
//  }
//  actualizar() {
//    this.posY += 6; // baja
//    if (this.posY > height) {
//      this.posY = random(-400, -50);
//      this.posX = random(0, width);
//    }
//  }
//}
