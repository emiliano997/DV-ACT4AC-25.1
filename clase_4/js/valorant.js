// fetch
// Dos opciones
// .then y .catch
// async y await

async function init() {
  const API_URL =
    "https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true";

  const agents = document.getElementById("agents");

  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();

    // const pre = document.getElementById("data");
    // pre.innerHTML = JSON.stringify(data, null, 2);

    data.forEach(({ displayIcon, displayName, description }) => {
      const div = document.createElement("div");
      div.className = "col-12 p-5 col-md-6";
      div.innerHTML = `
        <div class="card">
          <img class="card-img-top" src="${displayIcon}" alt="${displayName}" />
          <div class="card-body">
            <h2 class="card-title">${displayName}</h2>
            <p class="card-text">${description}</p> 
          </div>
        </div>
      `;

      agents.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    agents.innerHTML = `<p>Error al cargar los agentes</p>`;
  }
}

init();
