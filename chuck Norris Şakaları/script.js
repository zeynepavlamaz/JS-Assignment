document.addEventListener("DOMContentLoaded", getJoke);

const txtJoke = document.getElementById("txt-joke");
const btnNewJoke = document.getElementById("btn-new-joke");

btnNewJoke.addEventListener("click", getJoke);

function getJoke() {
  txtJoke.textContent = "Şaka Yükleniyooor :DD";

  const apiUrl = "https://api.chucknorris.io/jokes/random";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      txtJoke.textContent = data.value;
    })
    .catch((error) => {
        alert("An error has occurred: "+error);
      console.error("An error has occurred:", error);
      txtJoke.textContent =
        "The joke could not be received. Please try again.";
    });
}