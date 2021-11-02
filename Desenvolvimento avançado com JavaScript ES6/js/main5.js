const uniqueId = Symbol('Hello');

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'DIO - Digital Inovation One';

//console.log(arr=[Symbol.iterator]().next());
 
const obj = {
    values: [1, 2, 3, 4], 
    *[Symbol.iterator]() { 
        for (var i = 0; i < this.values.length; i++){
        yield this.values[i];          
        }
    }
};

for (let values of obj){
    console.log (values);
}





/* const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj); */