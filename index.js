
StoredTaskList = [
    {
        taskText: 'Clean shelf '
    },
    {
        taskText: 'Pay bills'
    },
]

window.onload = () => {

    const taskList = document.querySelector('#task-list');
    displayTaskList(StoredTaskList, taskList);
}

// Display the Tasks
function displayTaskList(StoredList, parentDiv) {
    for (let i = 0; i < StoredList.length; i++) {
        constructTaskList(StoredList[i].taskText, parentDiv);
    }
}

// Construct taskList
function constructTaskList(taskText, parentDiv) {

    // Consrtuct Task div
    const divTask = document.createElement('div');
    divTask.classList.add('task');
    // Construct task text
    const divTaskText = document.createElement('p');
    divTaskText.classList.add('taskText');
    divTaskText.innerText = taskText;
    // Construct checkbox input
    const divTaskCheckbox = document.createElement('input');
    divTaskCheckbox.type = 'checkbox';
    divTaskCheckbox.classList.add('taskCheckbox');
    divTaskCheckbox.addEventListener('click', function () {
        onCheck(divTaskCheckbox, divTaskText);
    });
    // Remove button
    const divTaskRemove = document.createElement('button');
    divTaskRemove.innerHTML = '-'
    divTaskRemove.classList.add('taskRemove');
    divTaskRemove.addEventListener('click', function () {
        divTask.parentNode.removeChild(divTask);
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