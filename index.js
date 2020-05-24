'use strict';

const todo__tasks = document.querySelector(".todo__tasks");
todo__tasks.innerHTML = " ";

const tasks = [];



function updateTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const taskdiv = document.createElement("div")
    taskdiv.classList.add("task")
    taskdiv.innerHTML = tasks[i]
    todo__tasks.appendChild(taskdiv)
  }
}


const addTask = () => {
  const inputValue = document.getElementById("new-task").value
  if (inputValue !== " ") {
    tasks.push(inputValue)
    document.getElementById("new-task").value = " "
    todo__tasks.innerHTML = " ";
    updateTasks()
  }

}



