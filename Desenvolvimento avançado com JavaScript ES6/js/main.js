function randomNumber(){
    console.log('Generating a random number...')
    return Math.random() * 10;
}

function multiply (a, b= randomNumber()) {
    return a * b;
}
var x = 0;
    while (x < 10 ){
    console.log(multiply(5));
    x++;
    alert('Valor atribuido:');
 }



/* var Obj = {
    showConText: function showConText(){

     setTimeout(() => {
         this.log('1000ms');
     }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
}
Obj.showConText(); */




/* var Obj = {
    showConText: function showConText(){
     this.log('teste');
     setTimeout(function(){
         this.log('1000ms');
     }.bind(this), 1000);

    },
    log: function log(value){
        console.log(value);
    }
}
Obj.showConText(); */



/* //função de primeiro nível
var sum = function(a, b){
    return (a + b);
}
console.log(sum(5, 6));
 */

/* //arow function
var sum = ( a, b) => (a + b);

console.log(sum(5,6)) */;

/* //Objeto com o "return" implícito. OBS Necessário colocar as chaves entre parênteses.

var createObj = () => ({teste: 'teste'});
console.log(createObj()); */

/* //Função construtora
function Car(){
    this.foo = 'bar';
}
console.log(new Car()); */