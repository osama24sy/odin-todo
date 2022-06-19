import '../src/assets/style/style.css';
import createHeader from "./assets/modules/header";
import createTodoSection from './assets/modules/todo-section/todo-section';

const body = document.getElementsByTagName("body")[0];
const content = document.createElement("div");
content.id = 'content';
body.appendChild(content);

createHeader();

createTodoSection();
