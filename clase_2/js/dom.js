// Introducción al DOM
// querySelector -> Selecciona el primer elemento que coincida
// querySelectorAll -> Selecciona todos los elementos que coincidan

// tagName
const title = document.querySelector("h1");

// #id
// const section = document.querySelector("#main");

// .class
// const mainText = document.querySelector(".main-text");
const listMainText = document.querySelectorAll(".main-text");

// getElementById -> Devuelve un nodo
const section = document.getElementById("main");
// getElementsByClassName -> Devuelve una colección de nodos
// getElementsByTagName -> Devuelve una colección de nodos

// Manipulación de los elementos
title.innerHTML = "Aplicación con <small>JavaScript</small>";
title.style.color = "red";
title.style.fontSize = "50px";
title.style.fontFamily = "Arial, sans-serif";

section.style.width = "580px";
section.style.padding = "20px";
section.style.backgroundColor = "lightblue";
section.style.border = "1px solid black";
section.style.borderRadius = "10px";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";
section.style.justifyContent = "center";

listMainText.forEach((p) => {
  p.style.color = "darkblue";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Arial, sans-serif";
});

// `` -> Backsticks o Template string
section.innerHTML = `
  <p class="main-text">Texto 1</p>
  <p class="main-text">Texto 2</p>
  <p class="main-text">Texto 3</p>
  <p class="main-text">Texto 4</p>
`;
