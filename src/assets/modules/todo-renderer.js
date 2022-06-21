const renderTodos = () => {
    const todoSection = document.getElementById('todo-section');

    const cont = document.createElement('div');
    cont.id = 'todo-wrapper';

    const items = JSON.parse(localStorage.getItem('defaultProject'));

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const div = document.createElement('div');
        div.id = `${i}`;

        const title = document.createElement('p');
        title.textContent = item.title;
        const description = document.createElement('p');
        description.textContent = item.description;
        const dueDate = document.createElement('p');
        dueDate.textContent = item.dueDate;
        const priority = document.createElement('p');
        priority.textContent = item.priority;

        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.innerText = 'Done';
        doneBtn.id = 'done-btn';
        doneBtn.addEventListener('click', () => {
            items.splice(i,1);
            localStorage.setItem('defaultProject', JSON.stringify(items));
            cont.innerHTML = '';
            renderTodos();
        });

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(dueDate);
        div.appendChild(priority);
        div.appendChild(doneBtn);

        div.classList.add('task');

        cont.appendChild(div);
    }

    todoSection.appendChild(cont);

};

export default renderTodos;