// Array de tareas
const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("tasks");

function init() {
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "card blue-grey darken-1";
      taskElement.innerHTML = `
  <div class="card-content white-text">
    <span class="card-title">${task.title}</span>
    <p>${task.description}</p>
  </div>
  `;

      taskList.appendChild(taskElement);
    });
  }
}

addTaskButton.addEventListener("click", () => {
  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.getElementById("task-description");

  // [] == false
  // 0 == false
  // "" == false
  // null == false
  if (!taskTitle.value || !taskDescription.value) {
    alert("Por favor completa todos los campos.");
    return;
  }

  tasks.push({
    title: taskTitle.value,
    description: taskDescription.value,
  });

  // localStorage.setItem -> Almacenar la tarea en el localStorage
  localStorage.setItem("last-task-title", taskTitle.value);
  localStorage.setItem("last-task-description", taskDescription.value);

  // JSON -> Nos permite convertir arrays en string y viceversa
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const taskElement = document.createElement("div");
  taskElement.className = "card blue-grey darken-1";
  taskElement.innerHTML = `
  <div class="card-content white-text">
    <span class="card-title">${taskTitle.value}</span>
    <p>${taskDescription.value}</p>
  </div>
  `;

  taskList.appendChild(taskElement);

  taskTitle.value = "";
  taskDescription.value = "";
});

const getLastTask = document.getElementById("get-last-task");

getLastTask.addEventListener("click", () => {
  const lastTaskTitle = localStorage.getItem("last-task-title");
  const lastTaskDescription = localStorage.getItem("last-task-description");

  if (!lastTaskTitle || !lastTaskDescription) {
    alert("No hay última tarea guardada.");
    return;
  }

  alert(`Última tarea: ${lastTaskTitle} - ${lastTaskDescription}`);
});

const deleteLastTask = document.getElementById("delete-last-task");

deleteLastTask.addEventListener("click", () => {
  localStorage.removeItem("last-task-title");
  localStorage.removeItem("last-task-description");
  alert("Última tarea eliminada.");
});

init();
