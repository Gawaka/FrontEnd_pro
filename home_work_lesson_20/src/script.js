
$(document).ready(function() {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let allTasks = JSON.parse(localStorage.getItem('Task')) || [];

    allTasks.forEach(item => {
        addNewTask(item);
    });

    function updateLocalStorage() {
        localStorage.setItem('Task', JSON.stringify(allTasks));
    }

    function addNewTask(taskText) {
        const $todoItem = $('<li>').addClass('todo-item');
        const $checkbox = $('<input>').attr('type', 'checkbox');
        
        const $text = $('<span>')
            .text(taskText)
            .addClass('todo-item__description js--task-text');

        const $deleteBtn = $('<button>')
            .addClass('todo-item__delete')
            .text('Видалити');

        $todoItem.append($checkbox, $text, $deleteBtn);
        $todosWrapper.append($todoItem);
    }

    $form.on('submit', function(e) {
        e.preventDefault();
        const inputValue = $input.val().trim();

        if (inputValue) {
            addNewTask(inputValue);
            allTasks.push(inputValue);
            updateLocalStorage();
            $input.val('');
        }
    });

    $todosWrapper.on('click', '.todo-item__delete', function() {
        const $taskItem = $(this).closest('.todo-item');
        const taskText = $taskItem.find('.todo-item__description').text();

        allTasks = allTasks.filter(task => task !== taskText);
        updateLocalStorage();

        $taskItem.remove();
    });

    $todosWrapper.on('change', 'input[type="checkbox"]', function() {
        const $taskItem = $(this).closest('.todo-item');
        
        if (this.checked) {
            $taskItem.addClass('todo-item--checked');
        } else {
            $taskItem.removeClass('todo-item--checked');
        }
    });

    $todosWrapper.on('click', '.js--task-text', function() {
        const taskText = $(this).text();
        
        $('#modalTaskText').text(taskText);
        
        $('#taskModal').modal('show');
    });
});