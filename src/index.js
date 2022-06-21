import '../src/assets/style/style.css';
import createHeader from "./assets/modules/header";
import createTodoSection from './assets/modules/todo-section/todo-section';
import renderTodos from './assets/modules/todo-renderer';
import createProjectSecion from './assets/modules/projects';

const body = document.getElementsByTagName("body")[0];
const content = document.createElement("div");
content.id = 'content';
body.appendChild(content);

createHeader();

createTodoSection();
renderTodos();
createProjectSecion();