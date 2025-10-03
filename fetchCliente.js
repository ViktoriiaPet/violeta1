async function getData(url) {
    const data = await fetch(url)
    const resJSON = await data.json();
    //const emails = resJSON.map(user => {
   // return `email: ${user.email}`
//})
    console.log(resJSON)
    return resJSON
}
//const data = getData('https://jsonplaceholder.typicode.com/users')
//const data = getData("http://localhost:4000/usuarios")
const url = "http://localhost:4000/login"
const user = {
    name: "Klod",
    lastname: "Smith",
    password: "klfjgfk"
}

async function postUsuary(url, user){
    await fetch(url, {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({user}),
    })
    
    .then(res => res.json())
.then(msg => console.log(msg))
}

const dataUser = postUsuary(url, user)