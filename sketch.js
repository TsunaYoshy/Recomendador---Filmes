let campoIdade;
let campoFantasia;
let campoAventura

function setup() {
  createCanvas(650, 300);
  createElement("H2","Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  corFundo = color(random(0, 255), random(0, 255), random(0, 255));
  corFonte = color(random(0, 255), random(0, 255), random(0, 255));
}


function draw() {
    background(corFundo);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

    fill(corFonte);
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
          if (idade >= 12){
            if (gostaDeAventura || gostaDeFantasia){
              return "Homem-Aranha no Aranhaverso";
            } else{
              return "Karate Kid";
            } 
          } else{
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Esqueceram de mim";
            }
          }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "Jumanji";
        }
    }
}
