function clicou(){
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por Clicar<b>";
    //console.log(document.getElementById('agradecimento'));
    //alert('Obrigado por clicar!');
}

function redirecionar(){
    window.open("http://www.google.com");
}

function trocar(elemento){
    //document.getElementById('onmouseover').innerHTML = "Obrigado por passar o mouse";
    //alert('Trocar texto');

    elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
    //document.getElementById('onmouseover').innerHTML = "Passe o mouse aqui";
    //alert('Trocar texto');
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/* var nome = "Fábio Developed";
var idade = 50;
var idade2 = 30;
var frase = "Japão é a melhor seleção do mundo!";

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert("meu primeiro JS dessa aula"); */

/* var idade = prompt("qual a sua idade");

if(idade >= 18){
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
} */

/* var count = 0;
while(count<=5){
    alert(count)
    console.log(count);
    count++;
} */
/* var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
 */

/* function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10)); */

/* function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil")); */

/* var validar = 0;

function validaIdade(idade){     
    validar;

    if(validar >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite sua idade");
validaIdade(idade);
console.log(validar); */
















