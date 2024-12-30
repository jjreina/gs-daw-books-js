import "./style.css";
import { createOption } from "./helpers/domHelper";
import { endpointBooks, endpointGenres } from "./helpers/apis";
import { parserToGenresClass } from "./helpers/promiseHelper";

const selects = document.querySelectorAll("select");
const genresSelect = selects[0];
const booksSelect = selects[1];
const img = document.querySelector("img");
let booksJson = [];

const fecthGenres = async () => {
  try {
    const response = await fetch(endpointGenres);
    const genresJson = await response.json();
    const genreClass = await parserToGenresClass(genresJson);
    genreClass.forEach((genre) => {
      const option = createOption(genre.value, genre.text);
      genresSelect.appendChild(option);
    });
  } catch (error) {
    console.error(new Error(error));
  }
};

genresSelect.addEventListener("change", async (event) => {
  try {
    const genre = event.target.value;
    const response = await fetch(`${endpointBooks}?genre=${genre}`);
    booksJson = await response.json();
    booksSelect.innerHTML = "";
    booksJson.forEach((book, index) => {
      const text = index === 0 ? "Select book" : book.name;
      const option = createOption(text, text);
      booksSelect.appendChild(option);
    });
    img.src = "default.png";
  } catch (error) {
    console.error(new Error(error));
  }
});

booksSelect.addEventListener("change", (event) => {
  const book = event.target.value;
  img.src =
    book === "Select book"
      ? "default.png"
      : booksJson.find((b) => b.name === book)?.cover || "default.png";
});

// Entrypoint - Fech genres
fecthGenres();
