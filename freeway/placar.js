//Placar
let meuPlacar = 0;
let placarOponente = 0;


function pontuar() {
  if(yVaca < 5){
    meuPlacar += 1;
    yVaca = 368
    pontos.play();
  }
   if(yTouro < 5){
    placarOponente += 1;
    yTouro = 368
    pontos.play();

  }
}

function mostraPlacar(){
  textSize(30);
  
  fill("Black");
  text(meuPlacar, 450, 30);
  
  fill("Black");
  text(placarOponente, 150, 30);
    
}

function touroVenceu(){
  fill("Black");
  rect(0,0,600,400);
  textSize(40);
  fill("Black");
  textAlign(CENTER);
  text("Touro venceu",150,200);
}
function vacaVenceu(){
  fill("Red");
  rect(0,0,600,400) ;
  textSize(40);
  fill("Red");
  textAlign(CENTER);
  text("Vaca venceu",450,200);
}