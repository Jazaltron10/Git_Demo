console.log("Hello world\n");
eg1 =()=>{
    const promise = new Promise((resolve, reject)=>{
        //Resolve Scenario
        setTimeout(() => {
        //food truck found 
        //change status from pending to fulfilled 
        resolve("Bringing tacos");
        },5000)
    
    
        //Reject Scenario
        setTimeout(()=>{
        //food truck not found 
        //change status from pending to rejected
        reject("Not bringing tacos, food truck not there.");
        },5000)
    
    });
    
    const onfulfillment = ( result ) =>{
        //resolve was called 
        console.log(result);
        console.log("Set up the table to eat tacos");
    }
    
    const onrejection=(error)=>{
        //reject was called 
        console.log(error);
        console.log("Start cooking pasta");
    }
    const arrive =()=>{
        console.log('i have arrived\n');
    }
    promise.then(onfulfillment).then(arrive);
    
    promise.catch(onrejection);
    
    
    /* resolve is a function which when called changes the status of the promise from pending to fulfilled.
    WHILE 
    reject is a function which when called changes the status of the promise from pending to rejected. */}

    //eg1();


    eg2=()=>{
        const promise1 = new Promise((resolve, reject) => {
            resolve(`January john is ${45+23} years old`);
          });
          
          promise1.then((value) => {
            console.log(value+"\n");
            // expected output: "Success!"
          });

    }
   // eg2();


    eg3=()=>{
        new Promise((resolve, reject) => {
            console.log('Initial');
        
            resolve();
        })
        .then(() => {
            throw new Error('Something failed');
        
            console.log(`Do this ${8*8}`);
        })
        .catch(() => {
            console.error('Do that');
        })
        .then(() => {
            console.log(`Do this, no matter what happened before: 9*8 = ${9*8}\n`);
        });
    }

    //eg3();

    eg6=()=>{
   
        const promise = new Promise(function(resolve, reject) {
      
            console.log("Promise callback");
      
            resolve();
    
        }).then(function(result) {
           console.log("Promise callback (.then)");
        });
    
        setTimeout(function() {
        console.log("event-loop cycle: Promise (fulfilled)", promise)
        }, 0);
    
        console.log("Promise (pending)", promise);
        }
        
        
        //eg6();



    let arr = new Array("1","2","3","4","5");
    eg4=()=>{
        arr1.forEach((item, index) => {
            console.log(item, index , "\n");
        })
    }

    //eg4(arr1);

    const arr2 = ["1","2","3","4","5","4","3","2","1"];
    
   eg5=()=>{
    const doubled = arr2.map((item) => {
        return item * 2 ;
    });
    console.log(doubled);
   }
   //eg5();
    

    const aray3 = [2,3,4,5,2,1,2,3]
    eg7=()=>{
        const evens = aray3.filter(item =>{
            return item % 2 === 0;
        });
        console.log(evens);

    }
    eg7();
    
    /*eg8=()=>{}
    eg8();
    
    eg9=()=>{}
    eg9();
    
    eg10=()=>{}
    eg10();
    
    eg11=()=>{}
    eg11(); */