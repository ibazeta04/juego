//class Pantalla {
//  constructor() {
//    this.estado = 1;   // 1 = inicio
//  }

//  dibujar() {

//    // PANTALLA DE INICIO
//    if (this.estado === 1) {
//      image(imgInicio, 0, 0, width, height);
//    }

//    // PANTALLA DE INSTRUCCIONES
//    else if (this.estado === 2) {
//      image(imgInstrucciones, 0, 0, width, height);
//    }

//    // PANTALLA DE CRÉDITOS
//    else if (this.estado === 3) {
//      image(imgCreditos, 0, 0, width, height);
//    }

//    // PANTALLA DE PERDISTE
//    else if (this.estado === 4) {
//      image(imgPerdiste, 0, 0, width, height);
//    }

//    // PANTALLA DE GANASTE
//    else if (this.estado === 5) {
//      image(imgGanaste, 0, 0, width, height);
//    }
//  }

//  // Cambia de pantalla con las teclas
//  teclaPresionada(keyCode) {

//    // EJEMPLO: pasar de inicio → instrucciones
//    if (this.estado === 1 && keyCode === ENTER) {
//      this.estado = 2;
//    }

//    // instrucciones → créditos
//    else if (this.estado === 2 && keyCode === ENTER) {
//      this.estado = 3;
//    }

//    // créditos → juego
//    else if (this.estado === 3 && keyCode === ENTER) {
//      this.estado = 0;  // 0 = juego
//    }

//    // perdiste → inicio
//    else if (this.estado === 4 && keyCode === ENTER) {
//      this.estado = 1;
//    }

//    // ganaste → inicio
//    else if (this.estado === 5 && keyCode === ENTER) {
//      this.estado = 1;
//    }
//  }
//}
