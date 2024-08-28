const taskInput = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const form = document.querySelector('form')
let todos = JSON.parse( sessionStorage.getItem('todos')) || []


function createListElement(task){
    const taskItem = document.createElement('li')
    taskItem.innerText = task
    taskItem.classList.add('text-gray-700')
    taskItem.classList.add('text-2xl')

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('line-through')
        taskItem.classList.toggle('text-gray-400')
    })

    taskList.appendChild(taskItem)
}

function addTask() {
    const task = taskInput.value
    createListElement(task)
    storeTodos(task)
    taskInput.value = ''
    
}

form.addEventListener('submit', e => {
    e.preventDefault()
    addTask()
})

function storeTodos(item){
    todos.push(itme)
    sessionStorage.setItem('todos', JSON.stringify(todos))
    
}

function createListFromSession() {
    todos.forEach( todo => {
        createListElement(todo)
    })
}


createListFromSession()