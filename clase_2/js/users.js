const input = document.getElementById("username");
const addUserButton = document.getElementById("addUserButton");
const usersList = document.getElementById("usersList");

addUserButton.addEventListener("click", () => {
  // Capturar los datos que ingresa el usuario
  console.log(input.value);

  const li = document.createElement("li");
  li.innerText = input.value;
  li.style.color = "green";

  usersList.appendChild(li);

  // Limpiar el campo de texto
  input.value = "";
});

// Delete Last User
const deleteLastUserButton = document.getElementById("deleteLastUser");

deleteLastUserButton.addEventListener("click", () => {
  const lastUser = usersList.lastElementChild;
  console.log(lastUser);
  if (!lastUser) {
    alert("No hay más usuarios para eliminar.");
    return;
  }

  usersList.removeChild(lastUser);
});

// Lista de usuarios
const users = ["emipe", "andreyN", "johnDoe", "janeDoe"];

users.forEach((user) => {
  const li = document.createElement("li");
  li.innerText = user;
  li.style.color = "blue";

  usersList.appendChild(li);
});
