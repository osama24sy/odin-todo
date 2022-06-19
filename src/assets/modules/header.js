const createHeader = () => {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("p");
    title.textContent = 'To Do';

    header.appendChild(title);
    content.appendChild(header);
    
};

export default createHeader;