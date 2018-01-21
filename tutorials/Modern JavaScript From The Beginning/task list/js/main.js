// const li = document.createElement('li');
// li.className = 'collection-item';
// li.appendChild(document.createTextNode('List Item'));

// const link = document.createElement('a');
// link.setAttribute('href', '#');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// document.querySelector('ul.collection').appendChild(li);


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// clearBtn.addEventListener('mousemove', runEvent);

// function runEvent(e) {

//     document.querySelector('.black').style.color = `rgb(${e.offsetX}, ${e.offsetY}, 40`;

//     console.log(`event type: ${e.type}`);
// }




// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     console.log(`event type: ${e.type}`)
// }


// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem)

// function deleteItem(e) {
// if(e.target.parentElement.className === 'delete-item secondary-content') {
//     console.log('delete item');

// }

//     if(e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }

// }


// document.querySelector('form').addEventListener('submit', function(e) {
//     const task = document.getElementById('task').value;

//     let tasks;
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('task saved');

//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task) {
//     console.log(task);
// });



//define ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//get tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    });
}

//add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);


    //store in Local storage
    storeTaskInLocalStorage(taskInput.value);



    //clear input
    taskInput.value = '';

    e.preventDefault();
}


// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            //remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from Local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear tasks
function clearTasks() {
    if (confirm('Are you sure?')) {
        // taskList.innerHTML = '';

        //faster
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

    // clear from Local storage
    clearTasksFromLocalStorage();
}


//clear tasks from Local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}