//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    movimentaBolinha ();
    bolinhaborda ();
     //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    Borda();
    criaRaquete(xRaquete, yRaquete, tamBolinha);
    movimentaRaquete(xRaquete, yRaquete, alturaRaquete);
    ovimentaRaquete ();
    colideRaquete ();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    //aqui criamos a bolinha e a pintamos de vermelho (adição do professor)
    fill("red");
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;

}

function Borda(){
    ///função responsável pela bolinha não sair fora do "campo/mesa"
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}
//função responável por criar o retangulo que representa a raquete
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill("blue");
    Rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//função responsável por movimentar a raquete
function movimentaRaquete() {
    if(keyIsDown(UP_ARROW)) {
        yRaquete -=10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete +=10;
    }

}
//função responsável por quando a bolinha bater na raquete, retornar em direção contrária.
function colideRaquete () {

    if(xBolinha - raioBolinha < xRaquete+ + larguraRaquete && yBolinha + raioBolinha > yRaquete) {

        xvelocidadeBolinha *= -1;
    }
}