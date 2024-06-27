//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background (175,238,238);
    //chamando a função
    criarBolinha(xBolinha, yBolinha, tamBolinha);
}

//função bolinha
function criaBolinha(xBolinha,yBolinha, tamBolinha){
    circle (xBolinha, yBolinha, tamBolinha);
}