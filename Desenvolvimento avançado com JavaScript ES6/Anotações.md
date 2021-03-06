### Desenvolvimento avançado com JavaScript ES6

## Ambas funções executam a mesma tarefa.

### **//exemplo 1: função de primeiro nível**

**var sum = function(a, b){**

  **return (a + b);**

**}**

**console.log(sum(5, 6));**

---

### **//Exemplo 2: Arrow function**

**var sum = ( a, b) => (a + b);**

**console.log(sum(5,6));**

---

**//Objeto com o "RETURN" implícito. OBS Necessário colocar as chaves entre parênteses, após o arrow "=>".**

**var createObj = () => ({teste: 'teste'});**

**console.log(createObj());**

---

**//Função construtora**

**function Car(){**

  **this.foo = 'bar';**

**}**

**console.log(new Car());**

---

### Abaixo comparação de duas funções, uma utilizando a escrita antiga, e a outra com arrow function.

**Ex: 1**

**var Obj = {**

  **showConText: function showConText(){**

   **this.log('teste');**

   **setTimeout(function(){**

​     **this.log('1000ms');**

   **}.bind(this), 1000);**

  **},**

  **log: function log(value){**

​    **console.log(value);**

  **}**

**}**

**Obj.showConText();**

---

**Ex: 2. OBS: Evita a utilização do bind para fixar o this.****

**var Obj = {**

  **showConText: function showConText(){**

   **setTimeout(() => {**

​     **this.log('1000ms');**

   **}, 1000);**

  **},**

  **log: function log(value){**

​    **console.log(value);**

  **}**

**}**

**Ex: 3**

**function randomNumber(){**

  **console.log('Gererating a random number...')**

  **return Math.random() * 10;**

**}**

**function multiply (a, b= randomNumber()) {**

  **return a * b;**

**}**---

**var x = 0;**

  **while (x < 10 ){**

  **console.log(multiply(5));**

  **x++;**

  **alert('Valor atribuido:');**

 **}**

---

### **Enhanced Object Literals**

**Ex: 1.**

**function method1(){**

  **console.log('method called');**

**}**

**var obj = {**

  **method1**

**}**

**obj.method1();**

---

**Ex: 2.**

**var obj = {**

  **sum: function sum(a, b){**

​    **return a + b;**

  **}**

**};**

**console.log(obj.sum(1, 5));**

---

**Ex: 3.**

**var obj = {**

  **sum(a, b){**

​    **return a + b;**

  **}**

**};**

**console.log(obj);**

---

**Ex: 4.**

**var propName = 'teste'**

**var obj = {};**

**obj[propName] = 'pro value';**

**console.log(obj);**

---

**Ex: 5.**

**var propName = 'teste'**

**var obj = {** 

  **[propName + '-concat']: 'pro value'**

**};**

**console.log(obj);**

---

### Conheça Rest e Spread Operator.

**Ex: 1.**

**///rest operator**

**function sum(...args) {**

  **return args.reduce((acc, value) => acc + value, 0));**

**}**

**console.log(sum(5, 5, 5, 2, 3));**

---

**Ex: 2.**

**const sum = (a, b, ...rest) => {**

  **console.log(a, b, rest);**

**}**

**console.log(sum(5, 5, 5, 2, 3));**

---

**Ex: 3.**

**const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)**

**const sum = (...rest) => {**

  **return multiply.apply(undefined, rest);**

**}**

**console.log(sum(5, 5, 5, 2, 3));**

---

### Spread Operator

**Ex: 1.**

**const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)**

**const sum = (...rest) => {**

  **return multiply(...rest);**

**}**

**console.log(sum(5, 5, 5, 2, 3));**

---

**Ex: 2.**

**const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)**

**const sum = (...rest) => {**

  **return multiply(...rest);**

**}**

**console.log(sum(5, 5, 5, 2, 3));**

---

**Ex: 3.**

**const str = 'DIO - Digital Innovation One';  //Quebra a string em letras e guarda no array**

**function LogArgs(...args) {**

  **console.log(args);**

**}**

**LogArgs(...str);**

---

**Ex: 4. Concatenando Arrays**

**const arr = [1, 2, 3, 4];**

**function LogArgs(a, b , c) {**

  **console.log(a, b, c);**

**}**

**const arr2 = arr.concat([8, 6, 7]);**

**console.log(arr2);**

---

**Ex: 5. Gerando um terceiro Array pela junção dos outros**

**const arr = [1, 2, 3, 4];**

**function LogArgs(a, b , c) {**

  **console.log(a, b, c);**

**}**

**const arr2 = arr.concat([8, 6, 7]);**

**const arr3 = [...arr2, ...arr, 0, 0, 0];**

**console.log(arr3);**

---

**Ex: 6. Só pode ser usado o Spread usando objetos literais, para criar novos objetos.** 

**const obj = {**

  **test:123**

**};**

**const obj2 = {**

  **...obj, test2: 'Hello'**

**}**

**const obj3 = {**

  **...obj2, test3: ' World'**

**}**

**console.log(obj3);**

---

## **Como usar Destructuring em ReactJS**

**Ex: 1. COMPARANDO**

**var arr = ['Apple', 'Banana', 'Orange',['Tomato']];**

**var apple = arr[0];**

**var banana = arr[1];**

**var orange = arr[2];**

**var tomato = arr[3][0];**



**//Destructuring Assingnment**

**var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];**

**console.log(tomato, tomato2);**

---

**Ex: 2.**

**var obj = {**

  **name: 'Celso'**

**}**

**//Destructuring Assingnment**

**var {name} = obj;**

**console.log(name);**

---

**Ex: 3.**

**var arr = ["Apple", 'Orange'];**

**var obj = {**

  **name: 'Celso',**

  **props: {**

​    **age: 26,**

  **favoriteColors: ['Black', 'Blue']** 

  **}**

**};**

**//var age = obj.props.age;**

**//Destructuring Assingnment**

**var apple2 = arr;**

**var {props: {age: age2, favoriteColors: [color1, color2]**

  **} } = obj;**

**console.log(color1, 'e',color2); // imprimindo as cores no console**

---

**Ex:  4.**

**var arr = [{name: "Apple", type: 'fruit'}];**

**var obj = {**

  **name: 'Celso',**

  **props: {**

​    **age: 26,**

  **favoriteColors: ['Black', 'Blue']** 

  **}**

**};**

**//var fruit1 = arr[0].name;**



**//Destructuring Assingnment**

**//var [{name: fruitName}] = arr;**

**//let [{name: fruitName}] = arr;**

**const [{name: fruitName}] = arr;**



**console.log(fruitName);**

---

**Ex: 5. //function**

**function sum ([a, b]){**

  **return a + b;**

**}**

**console.log(sum([5, 5]));**

---

**Ex: 6. //Object**

**function sum ({a, b}){**

  **return a + b;**

**}**

**console.log(sum({a: 5, b: 5}));**



## **Symbols e Iterators**

**Ex: 1.**

**const uniqueId = Symbol('Hello');**

**const uniqueId2 = Symbol('Hello');**

**console.log(uniqueId===uniqueId2);**

---

**Ex: 2. //Well known symbol**

**const uniqueId = Symbol('Hello');**

**Symbol.iterator;**

**Symbol.split;**

**Symbol.toStringTag;**

**const arr = [1, 2, 3, 4];**

**const it = arr[Symbol.iterator]();**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

**![symbol1](D:\Workspace\DIO\dio-desafio-github-01\Desenvolvimento avançado com JavaScript ES6\IMG\symbol1.jpg)**

---

**Ex: 3.**

**const uniqueId = Symbol('Hello');**

**Symbol.iterator;**

**const arr = [1, 2, 3, 4];**

**const obj = {**

  **values: [1, 2, 3, 4],** 

  **[Symbol.iterator]() {** 

​    **let i = 0;**

​    **return{**

​      **next: () => {**

​        **i++;**

​        **return{**

​        **value: this.values[i - 1],**

​        **done: i > this.values.length**

​        **};**

​      **}**

​    **};**  

  **}**

**};**

**const it = obj[Symbol.iterator]();**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());**

> [![symbol1](D:\Workspace\DIO\dio-desafio-github-01\Desenvolvimento avançado com JavaScript ES6\IMG\symbol1.jpg)]()



## **Generators**

**Ex: 1.**

**const uniqueId = Symbol('Hello');**

**Symbol.iterator;**

**const arr = [1, 2, 3, 4];**

**const str = 'DIO - Digital Inovation One';**

**//console.log(arr=[Symbol.iterator]().next());**

**const obj = {**

  **values: [1, 2, 3, 4],** 

  **[Symbol.iterator]() {** 

​    **let i = 0;**

​    **return{**

​      **next: () => {**

​        **i++;**

​        **return{**

​        **value: this.values[i - 1],**

​        **done: i > this.values.length**

​        **};**

​      **}**

​    **};**  

  **}**

**};**

**function* hello(){**

  **console.log('Hello');**

  **yield;**

  **console.log('fron');**

  **yield;**

  **console.log('function');**

**}**

**const it= hello();**

**console.log(it.next());**

**console.log(it.next());**

**console.log(it.next());** 

---

**Ex: 2.**

**const obj = {**

  **values: [1, 2, 3, 4],** 

  ***[Symbol.iterator]() {** 

​    **for (var i = 0; i < this.values.length; i++){**

​    **yield this.values[i];**      

​    **}**

  **}**

**};**

**for (let values of obj){**

  **console.log (values);**

**}**

---

## **Callbacks e Promises**

###### OBS: Promises pode ter  três status: Pending, Fullfiled e Rejected.

- **Pending: Pendente, em execução.**
- **Fullfiled :  Terminou de executar**
- **Rejected: Houve algum erro.**

---

**Ex: 1.**

**const doSomethingPromise = new Promise((resolve, reject ) => {**

  **setTimeout(function(){**

​    **//didi something**

​    **resolve('First data');**

  **},1000);**

**});**

**const doOtherthingPromise = new Promise((resolve, reject ) => {**

  **setTimeout(function(){**

​    **//did otherthing**

​    **resolve('Seconde data');**

  **},1000);**

**});**

**console.log(doSomethingPromise);**

---

**Ex: 2.**

**const doSomethingPromise = () => new Promise((resolve, reject ) => {**

  **//throw new Error("Something wrong");**

  **setTimeout(function(){**

​    **//didi something**

​    **resolve('First data');**

  **},1000);**

**});**

**const doOtherthingPromise = () => new Promise((resolve, reject ) => {**

  **//throw new Error("Something wrong");**

  **setTimeout(function(){**

​    **//did otherthing**

​    **resolve('Seconde data');**

  **},1000);**

**});**

**doSomethingPromise()**

**.then(data => {console.log(data); return doOtherthingPromise();**

**})**

**.then(data2 => console.log(data2))**

**.catch(error => console.log ('Ops', error));**
