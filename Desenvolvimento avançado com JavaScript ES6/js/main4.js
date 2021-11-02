//Object
function sum ({a, b}){
    return a + b;
}

console.log(sum({a: 5, b: 5}));


/* var arr = [{name: "Apple", type: 'fruit'}];
var obj = {
    name: 'Celso',
    props: {
        age: 26,
    favoriteColors: ['Black', 'Blue'] 
    }
};

//var fruit1 = arr[0].name;

//Destructuring Assingnment

//var [{name: fruitName}] = arr;
//let [{name: fruitName}] = arr;
const [{name: fruitName}] = arr;

console.log(fruitName); */


/* var arr = ['Apple', 'Banana', 'Orange',['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assingnment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato, tomato2); */