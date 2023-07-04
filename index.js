const userContainer = document.getElementById('users');

const getUsers=()=>{
    return fetch('https://dummyjson.com/users')  //users is our endpoint which link us to the exact server that we 
    .then(response=>response.json())
    // .then(response=>console.log({response}))
    // .catch(error=>console.error(error))
    .then(response=>response)
    .catch(error=>error)
}
getUsers();

const displayUsers = async()=>{
    const users = await getUsers();
    console.log(users);
    users.users.map(item=>{
        let div = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let userName = document.createElement('p');

        image.src = item.image;
        name.innerHTML = `${item.firstName} ${item.lastName}`;
        userName.innerHTML = item.username;

        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(userName);
        div.setAttribute('key',item.id);
        div.setAttribute('class','people');
        userContainer.appendChild(div);
    })
}
displayUsers();