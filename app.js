let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.append(li);
        taskInput.value = '';
    } else {
        alert('Enter your task!');
    }
};

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (eve) {
    if (eve.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-btn')) {
        const taskText = e.target.closest('li').querySelector('.task-text');
        taskText.classList.toggle('completed');
        e.target.textContent = taskText.classList.contains('completed') ? '✔️ Completed' : 'Complete';
    }

    if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('li');
        taskItem.remove();
    }
    
});



