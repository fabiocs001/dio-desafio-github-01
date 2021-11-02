///rest operator

const obj = {
    test:123
};
const obj2 = {
    ...obj, test2: 'Hello'
}
const obj3 = {
    ...obj2, test3: ' World'
}
console.log(obj3);



/* const str = 'DIO - Digital Innovation One'; 
const arr = [1, 2, 3, 4];

function LogArgs(a, b , c) {
    console.log(a, b, c);
}
const arr2 = arr.concat([8, 6, 7]);

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3); */


/* const str = 'DIO - Digital Innovation One'; 

function LogArgs(...args) {
    console.log(args);
}
LogArgs(...str); */


/* const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply(...rest);
}
console.log(sum(5, 5, 5, 2, 3)); */

/* function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0));
}

console.log(sum(5, 5, 5, 2, 3)); */