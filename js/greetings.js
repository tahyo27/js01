const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");
const qsName = document.querySelector("#qs-name");


const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const storedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    qsName.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const date = new Date();
    const currentHour = date.getHours();
    if(currentHour < 12) {
        greeting.innerText = `Good morning, ${username}`;
    } else if (currentHour < 18) {
        greeting.innerText = `Good afternoon, ${username}`;
    } else {
        greeting.innerText = `Good evening, ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);

}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //폼 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //greeting 보여줌
    qsName.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
