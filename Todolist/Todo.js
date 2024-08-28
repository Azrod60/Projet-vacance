// Sélection des éléments DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Charger les tâches depuis le localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    addTaskToDOM(taskText, false);
    saveTask(taskText, false);
    taskInput.value = '';
}

function addTaskToDOM(text, completed) {
    const li = document.createElement('li');
    li.textContent = text;

    if (completed) {
        li.classList.add('completed');
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
        updateTaskStatus(text, li.classList.contains('completed'));
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => {
        li.remove();
        removeTask(text);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text, completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskStatus(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(task => task.text === text);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function removeTask(text) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}