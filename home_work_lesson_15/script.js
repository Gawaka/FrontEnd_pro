
const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

const allTasks = JSON.parse(localStorage.getItem('Task')) || [];

allTasks.forEach(item=> {
    addNewTask(item);
});

function addNewTask(taskText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const text = document.createElement('span');
    text.textContent = taskText;
    text.classList.add('todo-item__description');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.textContent = 'Видалити';

    todoItem.append(checkbox, text, deleteBtn);
    todosWrapper.append(todoItem);
};

function addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
};

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const target = e.target;
    const inputValue = input.value;

    if (inputValue) {
        addNewTask(inputValue);
        input.value = '';
    };

    allTasks.push(inputValue);
    addToLocalStorage('Task', JSON.stringify(allTasks));
});

todosWrapper.addEventListener('click', (e)=> {
    const target = e.target;
    const taskItem = target.closest('.todo-item');

    if(target.classList.contains('todo-item__delete')) {
        taskItem.remove();
    };
});

todosWrapper.addEventListener('change', (e)=> {
    const target = e.target;
    const taskItem = target.closest('.todo-item');

    if (target.type === 'checkbox') {
        if (target.checked) {
            taskItem.classList.add('todo-item--checked')
        } else {
            taskItem.classList.remove('todo-item--checked')
        };
    };
});