let order = [];
let clickedOrder= [];
let score = 0;

/* 
0 - verde
1 - vermelho
2 - amarelo
3 - azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando a ordem aleatória das cores.
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor.
let lightColor = (element, number) => {
    number = number * 700;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 450);

    setTimeout(() => {
        element.classList.remove('selected');
    }), number + 350;
}

//Verifica se a ordem dos cliques é a mesma gerada pelo jogo.
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }   
    }   

    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Próximo nivel!`);
        nextLevel();
    }
    
}

//funcao clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao retorna a cor
let createColorElement = (color) => {
    if(color == 0 ){
        return green;
    } else if(color == 1 ){
        return red;
    } else if(color == 2 ){
        return yellow;
    } else if(color == 3 ){
        return blue;
    }  
}

//funcao proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Seja bem vindo! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//clicar cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();