"use strict";

$(document).ready(function () {
  var $form = $('.js--form');
  var $input = $('.js--form__input');
  var $todosWrapper = $('.js--todos-wrapper');
  var allTasks = JSON.parse(localStorage.getItem('Task')) || [];
  allTasks.forEach(function (item) {
    addNewTask(item);
  });
  function updateLocalStorage() {
    localStorage.setItem('Task', JSON.stringify(allTasks));
  }
  function addNewTask(taskText) {
    var $todoItem = $('<li>').addClass('todo-item');
    var $checkbox = $('<input>').attr('type', 'checkbox');
    var $text = $('<span>').text(taskText).addClass('todo-item__description js--task-text');
    var $deleteBtn = $('<button>').addClass('todo-item__delete').text('Видалити');
    $todoItem.append($checkbox, $text, $deleteBtn);
    $todosWrapper.append($todoItem);
  }
  $form.on('submit', function (e) {
    e.preventDefault();
    var inputValue = $input.val().trim();
    if (inputValue) {
      addNewTask(inputValue);
      allTasks.push(inputValue);
      updateLocalStorage();
      $input.val('');
    }
  });
  $todosWrapper.on('click', '.todo-item__delete', function () {
    var $taskItem = $(this).closest('.todo-item');
    var taskText = $taskItem.find('.todo-item__description').text();
    allTasks = allTasks.filter(function (task) {
      return task !== taskText;
    });
    updateLocalStorage();
    $taskItem.remove();
  });
  $todosWrapper.on('change', 'input[type="checkbox"]', function () {
    var $taskItem = $(this).closest('.todo-item');
    if (this.checked) {
      $taskItem.addClass('todo-item--checked');
    } else {
      $taskItem.removeClass('todo-item--checked');
    }
  });
  $todosWrapper.on('click', '.js--task-text', function () {
    var taskText = $(this).text();
    $('#modalTaskText').text(taskText);
    $('#taskModal').modal('show');
  });
});