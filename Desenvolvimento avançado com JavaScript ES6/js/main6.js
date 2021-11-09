const doSomethingPromise = () => new Promise((resolve, reject ) => {
    //throw new Error("Something wrong");
    setTimeout(function(){
        //didi something
        resolve('First data');
    },1000);
});

const doOtherthingPromise = () => new Promise((resolve, reject ) => {
    //throw new Error("Something wrong");
    setTimeout(function(){
        //did otherthing
        resolve('Seconde data');
    },1000);
});

doSomethingPromise()
.then(data => {console.log(data); return doOtherthingPromise();
})
.then(data2 => console.log(data2))
.catch(error => console.log ('Ops', error));
