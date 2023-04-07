const videogameForm = document.querySelector("#videogame_form");
if (videogameForm instanceof HTMLFormElement) {
  videogameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(videogameForm);
    data = {};
    formData.forEach((value, key) => (data[key] = value));
    fetch("/api/videogames", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
}
