function calculadora(){
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    console.log(operacao);

    if (!operacao || operacao>6){
        alert('Erro - Operação inválida!');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subritacao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da Vivisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if(opcao==1){
                    calculadora();
                }else if(opcao ==2){
                    alert ('Até mais!');
                }else{
                    alert ('Até maisDigite uma opção válida!');
                    novaOperacao();
                }
            }            
        }

       /*  if (operacao == 1){
            soma();
        } else if (operacao == 2){
            subritacao();
        } else if (operacao == 3){
            multiplicacao();
        } else if (operacao == 4){
            divisaoReal();
        } else if (operacao == 5){
            divisaoInteira();
        } else if (operacao == 6){
            potenciacao();
        } */
        switch operacao{
            case 1 : soma();
            case 2 : subritacao();
            case 3 : multiplicacao();
            case 4 : divisaoReal();
            case 5 : divisaoInteira();
            case 6 : potenciacao();
        }
    }        
}
calculadora();