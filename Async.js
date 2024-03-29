const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];


function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            
            if (!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}


// createPost({title:'Post Three', body:'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));




//ASync / Await 
/* async function init()   {
    await createPost({title:'Post Three', body:'This is post three'});
    
    getPosts();
}

    init(); */



//ASync / Await / Fetch 
async function fetchUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    const bingoData = await res.json();

    console.log(bingoData);
}

fetchUsers();





