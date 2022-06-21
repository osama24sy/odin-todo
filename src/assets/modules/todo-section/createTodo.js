import renderTodos from "../todo-renderer";

const createTodoDom = () => {
    const cont = document.createElement('div');
    cont.id = 'todo-form';

    const form = document.createElement('form');

    const title = document.createElement('input');
    title.placeholder = 'Title';
    title.type = 'text';
    title.id = 'title';

    const description = document.createElement('input');
    description.placeholder = 'Description';
    description.type = 'text';
    description.id = 'description';

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'dueDate';
    dueDate.value = new Date().toJSON().slice(0,10);


    // Create a priority dropdown
    const priority = document.createElement('select');
    priority.id = 'priority';

    const highPrio = document.createElement('option');
    highPrio.value = 'high';
    highPrio.innerText = 'High';

    const mediumPrio = document.createElement('option');
    mediumPrio.value = 'medium';
    mediumPrio.innerText = 'Medium';
    
    const lowPrio = document.createElement('option');
    lowPrio.value = 'low';
    lowPrio.innerText = 'Low';

    priority.appendChild(highPrio);
    priority.appendChild(mediumPrio);
    priority.appendChild(lowPrio);

    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.type = 'submit';
    submit.innerText = 'Add Task';

    submit.addEventListener('click', () => {
        const task = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value 
        };

        if (task.title !== "") {
            if (localStorage.defaultProject) {
                let currProject = JSON.parse(localStorage.getItem('defaultProject'));
                currProject.push(task);
                localStorage.setItem('defaultProject', JSON.stringify(currProject));
            } else {
                localStorage.setItem('defaultProject', JSON.stringify([task]));
            }

            renderTodos();
        }
    });
    
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerText = 'Cancel';
    cancel.type = 'button';

    cancel.addEventListener('click', () => {
        cont.style.display = 'none';
        const addBtn = document.getElementById('add-btn');
        addBtn.style.display = 'block';
    });

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submit);
    form.appendChild(cancel);

    cont.appendChild(form);

    return cont;
};

export default createTodoDom;