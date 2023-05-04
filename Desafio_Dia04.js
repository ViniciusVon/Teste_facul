/*
  1 - Fazer um programa num de 0 a 10, com 3 tentativas, no final, se nao acertar nenhuma
  mostrar qual era o numero escolhido. 

*/
//const numSorteado = 7;
const tentativas = 3;
const msgParabens = `Parabéns, você acertou o número sorteado que era o número ${numSorteado}.`;
const msgErro = "ERRO! Digite um número válido, de acordo com a instrução do Jogo.";
const msgPadrao = `Restam apenas ${tentativas} tentativa(s).`;
const msgPerdeu = `Não foi dessa vez...O número sorteado era o número ${numSorteado}. Tente jogar o jogo novamente.`

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numSorteado = getRandomIntInclusive(0,10);

while(tentativas >= 0){
    let numDigitado = prompt("Tente acertar o número sorteado, que está entre 0 e 10.");
    if (numDigitado === numSorteado){
        alert(msgParabens);
        break;
    } else if (numDigitado > 10){
        alert(msgErro);
    } else{
        alert(msgPadrao);
    }
    tentativas--;
    if (tentativas = 0){
        alert(msgPerdeu);
    }
} 
