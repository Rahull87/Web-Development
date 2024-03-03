let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Done'}</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text !== '') {
        tasks.push({ text, completed: false });
        input.value = '';
        renderTasks();
    } else {
        alert('Please enter a task!');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

renderTasks();
