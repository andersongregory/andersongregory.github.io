function setup() {
 createCanvas(600, 400);
  trilha.loop();
}

function draw() {
 background(imgEstrada);
  if(frameCount < 200) //5 segundos
    telaInicial();
  else
    jogar();
  }