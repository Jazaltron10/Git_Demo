function promise31() {
    const hasMeeting = false;
    const Meeting = new Promise ((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name:'Maketing Meeting',
            location:'Skype',
            time:'1:00 PM'
        }
        resolve(meetingDetails);
        }else{
            reject(new Error ('Meeting already Scheduled'))
        }
});
/* const addTOCalendar = meetingDetails => {
    return new Promise ((resolve, reject)=>{
        const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
        resolve(calendar);
    })
} */

//Alternatively you can also write it like this 
const addTOCalendar = meetingDetails => {
        const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
        return  Promise.resolve(calendar);
    }




Meeting
    .then(addTOCalendar)
    .then( res =>{
        console.log('Meeting Scheduled');
        console.log(res);
    })
    .catch(err => {
        console.log(err.message);
    })
}

//promise31();


//Using Promise.all and Promise.race
function promise32(){
    const promise1 = Promise.resolve('Promise 1 complete');
    const promise2 = new Promise((res, rej)=>{
        setTimeout(()=>{
            res('Promise 2 complete');
        }, 2000);
    })

    // promise1.then(res => console.log(res));
    // promise2.then(res => console.log(res));
    

    //Thsi is for when you want to return all your promises at the same time
    Promise.all([promise1, promise2]).then(res => console.log(res));

    //This for returning the promise that finishes first 
    Promise.race([promise1, promise2]).then(res => console.log(res));

}

//promise32();



function async33(){

    const hasMeeting = false;
    const Meeting = new Promise ((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name:'Maketing Meeting',
            location:'Skype',
            time:'1:00 PM'
        }
        resolve(meetingDetails);
        }else{
            reject(new Error ('Meeting already Scheduled'))
        }
});

const addTOCalendar = meetingDetails => {
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return  Promise.resolve(calendar);
}

    async function myMeeting(){
    try{
        const meetingDetails = await Meeting;   
        const message = await addTOCalendar(meetingDetails);
        console.log(message);
        }catch(err){
            console.log(err.message)
        }  
    }  
    myMeeting();
}
async33();