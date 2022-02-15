let arrayOfTodos = [
    {
    "userId": 114,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": " aut autem",
    "completed": false
}]


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let i = 0;i<arrayOfTodos.length;i++){
    let a  = arrayOfTodos[i].title
    const item = document.getElementById("todo-list")
    let newObject = document.createElement("li")
    let text = document.createTextNode(a)
    newObject.appendChild(text)
    item.appendChild(newObject)
    console.log(newObject)
    console.log(a)
    console.log(item)
}
}