const taskForm = document.getElementById("tasks__form");
const taskText = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

taskForm.addEventListener("submit", e => {
    const n = document.getElementsByClassName("task__remove").length+1;
    if (taskText.value.trim()) {
        let newDivElement = document.createElement('div');
            newDivElement.className = "task"
            newDivElement.innerHTML = `<div class="task__title">${n}). ${taskText.value}</div>
                                        <a href="#" class="task__remove">&times;</a>`
        taskList.append(newDivElement)
    }
    taskText.value = ``
    e.preventDefault()
    
})

window.document.addEventListener("click", el => {

    if (el.target.className === ("task__remove")) {
        el.target.parentElement.remove()
    }
})

