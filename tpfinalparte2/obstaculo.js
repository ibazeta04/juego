
class obstaculo {
  constructor() {
    this.reset();
    this.img = imgObstaculos[int(random(1, 2))];
  }

  reset() {
    // carriles: 0 = izquierda, 1 = centro, 2 = derecha
    let carril = int(random(0, 3));

    if (carril === 0) this.x = -180;
    else if (carril === 1) this.x = 0;
    else this.x = 180;

    this.y = 50;             // altura vertical fija
    this.z = 1500;           // aparece lejos
  }

  actualizar() {
    this.z -=6;            // velocidad hacia adelante

    if (this.z < 120) {      // llegó al jugador → reaparece
      this.reset();
    }
  }

  dibujar() {
    let escala = 400 / this.z;
    let pantallaX = width/2 + this.x * escala;
    let pantallaY = height/2 + this.y * escala;
    let tamaño = 260 * escala;

    imageMode(CENTER);
    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
  }
}



//class obstaculo {
//  constructor() {
//    this.reset();
//    this.img = imgObstaculos[int(random(1, 2))];
//  }

//  reset() {
//    this.x = random(-250, 250);
//    this.y = random(-0, 200);
//    this.z = random(800, 2000);
//  }

//  actualizar() {
//    this.z -= 10;

//    if (this.z < 120) {
//      this.reset(); // vuelve al fondo
//    }
//  }

//  dibujar() {
//    let escala = 400 / this.z;
//    let pantallaX = width/2 + this.x * escala;
//    let pantallaY = height/2 + this.y * escala;
//    let tamaño = 220 * escala;

//    imageMode(CENTER);
//    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
//  }
//}
//class obstaculo {
//  constructor(indice = 0, baseX = 300, baseY = 360) {
//    this.espaciado = 100;    // distancia horizontal entre arboles
//    //this.desvioY = random(-10, 10); // leve variación vertical

//    this.posX = baseX + (indice - 4) * this.espaciado; // -4 centra el grupo
//    this.posY = baseY + this.espaciado; //this.desvioY;

//    this.img = imgObstaculos[int(random(1, 2))];
//  }

//  dibujar() {
//    image(this.img, this.posX, this.posY, 200, 200);
//  }
//  actualizar() {
//    this.posY += 1; // baja hacia abajo
//    if (this.posY > height) {
//      this.posY = random(-250, -10); // vuelve a aparecer arriba
//      this.posX = random(10, 400);   // cambia su posición X
//    }
//  }
//}






//constructor(){
//this.posX = random(20,  width);
//  this.posY = random(height / 4, height - 100);
//this.img = imgObstaculos[int(random(1, 4))];
// }
//  dibujar(){
//    image(this.img, this.posX, this.posY, 200, 200);
