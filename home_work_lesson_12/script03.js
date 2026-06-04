
const todo = document.querySelector('.todo');
const input = document.querySelector('input');
const btn = document.getElementById('1');

function createToDoList() {
    btn.addEventListener('click', (e)=> {
        if (input.value) {
            const task = document.createElement('li');
            task.classList.add('task');

            const taskText = document.createElement('p');
            const removeTask = document.createElement('button');
            removeTask.classList.add('remove');
            
            removeTask.textContent += '❌';
            taskText.innerHTML += input.value;

            input.value = '';

            task.append(taskText, removeTask);
            todo.append(task);

            removeTask.addEventListener('click', ()=> {
                task.remove();
            });
        };
    });
};

createToDoList();