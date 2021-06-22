const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoFilter = document.getElementById('todo-filter');


const getTodosFromStorage = () => {
    const storage = JSON.parse(localStorage.getItem('todos'));
    return(storage) ? storage :[];
}






const todos = getTodosFromStorage();


const getTodosToPage = () => {
    todos.forEach((todo) => {
        createTodoItem(todo);
    });
}

const saveTodosStorage = (todo) => {
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    createTodoItem(todo);
}




todoButton.addEventListener('click',() => {
    const input = todoInput.value;
    if(input) saveTodosStorage(input);
    todoInput.value ="";
})

window.addEventListener('load',() => {
    getTodosToPage();

})

const removeTodo = (target) => {
    const todo = target.parentNode.childNodes[0].innerHTML;
    removeTodoFromStorage(todo);
    target.parentNode.remove();

}


const removeTodoFromStorage = (todo) => {
    const index = todos.indexOf(todo);
    if(index > -1){
        todos.splice(index,1);
        localStorage.setItem('todos',JSON.stringify(todos));
    }

}








const createTodoItem = (text) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item', 'todo');
    const todoItemLi= document.createElement('li');
    todoItemLi.innerHTML = text;
    const todoItemCheck = document.createElement('i');
    todoItemCheck.classList.add('fa','fa-square');
    todoItemCheck.setAttribute('onclick','checkTodo(this)');
    const todoItemRemove = document.createElement('i');
    todoItemRemove.classList.add('fa', 'fa-trash');
    todoItemRemove.setAttribute('onclick','removeTodo(this)');
    todoItem.appendChild(todoItemLi);
    todoItem.appendChild(todoItemCheck);
    todoItem.appendChild(todoItemRemove);
    todoList.appendChild(todoItem);

}

