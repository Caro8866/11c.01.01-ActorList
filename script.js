// window.addEventListener("DOMContentLoaded", init);

const database = "actors.json";

// Fetch Data
fetch(database)
  .then((res) => res.json())
  .then((data) => loadActors(data));

function loadActors(data) {
  console.log(data);
  data.forEach(displayActors);
}

// POPULATE PAGE
function displayActors(actors) {
  const parent = document.querySelector(".actors");

  // Grab template
  const template = document.querySelector("#actorCardTemp").content;

  // Clone template
  const copy = template.cloneNode(true);

  // Change Content

  // Actor name
  copy.querySelector("h2").textContent = actors.fullname;

  // Movie name
  copy.querySelector(".movieName").textContent = actors.movie;

  // Add class of movie to change colors + remove spaces in movie name to match classes
  copy.querySelector("article").classList.add(actors.movie.replace(" ", ""));

  // DETAIL CARD
  copy.querySelector(".actorCard").addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".detailCard").classList.remove("hidden");

    document.querySelector(".content h2").textContent = actors.fullname;
    document.querySelector(".content span").textContent = actors.movie;

    document.querySelector(".detailCard").classList.remove("hidden");
  });

  document.querySelector(".closeBtn").addEventListener("click", () => {
    document.querySelector(".detailCard").classList.add("hidden");
    console.log("clicked");
  });

  // Append Parent
  parent.appendChild(copy);
}
