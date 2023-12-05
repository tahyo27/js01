const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDoBox = document.querySelector("#todo-box");
const toDoToggle = document.querySelector("#todo-toggle")

const VISUAL = "visual-hidden";
const TODOS_KEY = "todos";

let toDos = [];
let numId = parseInt(localStorage.getItem("numId")) || 0;

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    console.log(li.id);
    saveToDos();
    
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    //체크박스
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "checkbox";
    input.id = newTodoObj.id;

    if (newTodoObj.checked) { //체크 되어있으면 출력할때 true로
        input.checked = true;
    }
    //내용
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: numId++,
        checked: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    localStorage.setItem("numId", numId);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function saveToDos() {
    //체크박스 반영
    const checkboxs = document.querySelectorAll("input[name=checkbox]");
    for (let i = 0; i < checkboxs.length; i++) {
      toDos[i].checked = checkboxs[i].checked;
    }
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

window.addEventListener("beforeunload", saveToDos); //창 닫기전 상태 저장

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function todoBoxToggle() {//토글 박스 보이게
    toDoBox.classList.toggle(VISUAL);
}

toDoToggle.addEventListener("click", todoBoxToggle);