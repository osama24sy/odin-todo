const createProjectSecion = () => {
    const content = document.getElementById('content');

    const cont = document.createElement('div');
    cont.id = 'project-section';

    for (let i = 0; i < localStorage.length; i++) {
        const projectName = localStorage.key(i);
        
        const projectContainer = document.createElement('div');
        const projectTitle = document.createElement('p');
        projectTitle.innerText = `${projectName}`;

        projectContainer.appendChild(projectTitle);

        cont.appendChild(projectContainer);
    }

    content.appendChild(cont);
};

export default createProjectSecion;