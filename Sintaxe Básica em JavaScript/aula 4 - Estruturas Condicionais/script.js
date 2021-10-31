/* var jogador1 = 1;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('OS jogadores são válidos') : console.log('OS jogadores são inválidos');
    if ((jogador1 & jogador2) > 0){
        console.log('Ambos marcaram ponto');
    } else if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;

    } else if(jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguem marcou ponto');
    }

    switch(placar){
        case placar = jogador1 > jogador2:
            console.log('Jogador1 ganhou!');
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador2 ganhou!');
        break;
        default:
            console.log('Ninguem Ganhou!');
    } */

    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
    let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

    /* //For execulta uma instrução até que ela seja falsa
    for( let indice = 0; indice < array.length; indice++){
        console.log(indice);
    } */

    /* //fOR/IN executa apartir de uma propriedade
    for(let i in array){
        console.log(i);
    }

    //fOR/IN com object
    for(let i in object){
        console.log(i);
    } */

    /* //For/Of Executa repetição a partir de um valor
    for(i of array){
        console.log(i);
    }

    //For/of com objetos
    for(i of object.propriedade1){
        console.log(i);
    }
 */
var a = 0;

while (a < 10 ){
    a++;
    console.log(a);
}
do{
    a++;
    console.log(a);
} while (a < 10);