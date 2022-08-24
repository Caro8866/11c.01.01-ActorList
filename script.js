// window.addEventListener("DOMContentLoaded", init);

const database = "actors.json";

// Fetch Data
fetch(database)
  .then((res) => res.json())
  .then((data) => handleActors(data));

function handleActors(actors) {
  console.log(actors);
}

// Populate page

// Grab template

// Clone template

// Change Content

// Grab Parent

// Append Parent

// Show info card
