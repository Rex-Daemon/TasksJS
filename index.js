
TaskList = [
    {
        taskText: 'Clean shelf'
    },
    {
        taskText: 'Pay bills'
    },
]

// Initialize in local storage
if (localStorage.getItem('StoredTaskList') == null) {
    localStorage.setItem('StoredTaskList', JSON.stringify(TaskList));
}

window.onload = () => {

    const taskListDiv = document.querySelector('#task-list');
    const taskFormText = document.querySelector('#task-form-text');
    const taskForm = document.querySelector('#task-form');
    let myList = JSON.parse(localStorage.getItem('StoredTaskList') || "[]");
    // Display Tasks
    displayTaskList(myList, taskListDiv);
    // Form submit function
    taskForm.addEventListener('submit', function (e) {
        addTask(myList, taskListDiv, taskFormText);
        e.preventDefault();
    });
}

// add to task list 
function addTask(taskList, parentDiv, formInputText) {
    if (!(formInputText.value.trim() == '')) {
        taskList.push({ taskText: formInputText.value });
        localStorage.setItem('StoredTaskList', JSON.stringify(taskList));
        constructTaskList(taskList, formInputText.value, parentDiv);
    }
    formInputText.value = '';
}

// Display the Tasks
function displayTaskList(StoredList, parentDiv) {
    for (let i = 0; i < StoredList.length; i++) {
        constructTaskList(StoredList, StoredList[i].taskText, parentDiv);
    }
}

// Construct taskList
function constructTaskList(taskList, taskText, parentDiv) {

    // Consrtuct Task div
    const divTask = document.createElement('div');
    divTask.classList.add('row');
    divTask.classList.add('task');
    // Construct task text
    const divTaskText = document.createElement('p');
    divTaskText.classList.add('col-10');
    divTaskText.classList.add('taskText');
    divTaskText.innerText = taskText;
    // Construct checkbox input
    const divTaskCheckbox = document.createElement('input');
    divTaskCheckbox.type = 'checkbox';
    divTaskCheckbox.classList.add('col-1');
    divTaskCheckbox.addEventListener('click', function () {
        onCheck(divTaskCheckbox, divTaskText);
    });
    // Remove button
    const divTaskRemove = document.createElement('button');
    divTaskRemove.innerHTML = '-';
    divTaskRemove.classList.add('col-1');
    divTaskRemove.classList.add('btn');
    divTaskRemove.classList.add('btn-danger');
    divTaskRemove.addEventListener('click', function () {
        onRemove(taskList, taskText, divTask);
    });
    // Append
    divTask.appendChild(divTaskCheckbox);
    divTask.appendChild(divTaskText);
    divTask.appendChild(divTaskRemove);
    parentDiv.appendChild(divTask);
}

function onCheck(checkbox, text) {
    if (checkbox.checked == true) {
        text.style.textDecoration = 'line-through';
        text.style.color = '#777777'
    }
    else {
        text.style.textDecoration = 'none';
        text.style.color = '#000000'
    }
}

function onRemove(list, text, div) {
    const removeIndex = list.indexOf(text);
    list.splice(removeIndex, 1)
    localStorage.setItem('StoredTaskList', JSON.stringify(list));
    div.parentNode.removeChild(div);
}