
const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Walk to the fish");
    },5000)


    setTimeout(()=>{
        reject("stay away from the fish");
    },5000)
})


    const logAfterDelay = (message) => {
        console.log(message);
    }

    const onfailure=(failure)=>{
    console.log(failure);
    console.log("The fishes starved and are now dead");
    }
    feedFish=()=>{
        console.log("Feed the Fish");
    }
    watchFishEat=()=>{
        console.log("Watch the fish eat their food");
    }
    standDoNothing=()=>{
        console.log("Stand there and do nothing");
    }

promise.then(logAfterDelay).then(feedFish).then(watchFishEat).then(standDoNothing);

promise.catch(onfailure);



        
/* function feedFish(){
    return logAfterDelay ('Feed the Fish');
} 
function watchFishEat(){
    return logAfterDelay('Watch fish eat their food');
}
function standDoNothing(){
    return logAfterDelay('Stand there and do nothing');
} */