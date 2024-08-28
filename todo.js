const taskInput = document.querySelector('#task-input') //querySelector คือคำสั่งสำหรับเข้าถึง element #task-input ตัวแรกที่พบและคืนค่า
const taskList = document.querySelector('#task-list')
const form = document.querySelector('form')
let todos = JSON.parse( sessionStorage.getItem('todos')) || [] //JSON.parse() สำหรับแปลง string เป็น object หรือ แปลง object เป็น array


function createListElement(task){
    const taskItem = document.createElement('li')  //สร้าง element แบบ list 
    taskItem.innerText = task
    taskItem.classList.add('text-gray-700') 
    taskItem.classList.add('text-2xl')

    taskItem.addEventListener('click', () => {   //event click
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
    sessionStorage.setItem('todos', JSON.stringify(todos)) //JSON.stringify()เป็นการแปลงข้อมมูลจาก JavaScript Object ให้อยู่ในรูปของ JSON String เมื่อทำการเรียกใช้งานฟังก์ชันแล้ว ก็จะได้ค่าที่เป็น string 
    
}

function createListFromSession() {
    todos.forEach( todo => {
        createListElement(todo)
    })
}


createListFromSession()