console.log("Hello world");
//Resolve Scenario
const promise = new Promise((resolve, reject)=>{
setTimeout(() => {
    //food truck found 
    //change status from pending to fulfilled 
    resolve("Bringing tacos");
},5000)
})

//Reject Scenario
const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //food truck not found 
        //change status from pending to rejected
        reject("Not bringing tacos, food truck not there.");
    },5000)
})
const onfulfillment =( result ) =>{
    //resolve was called 
    console.log(result);
    console.log("Set up the table to eat tacos");
}

const onrejection=(error)=>{
    //reject was called 
    console.log(error);
    console.log("Start cooking pasta");
}

promise.then(onfulfillment);
promise.catch(onrejection);


/* resolve is a function which when called changes the status of the promise from pending to fulfilled.
WHILE 
reject is a function which when called changes the status of the promise from pending to rejected. */