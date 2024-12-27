import "./style.css";
import { createOption } from "./helpers/domHelper";

const endpointGenres = "http://localhost:3000/genres";
const endpointBooks = "http://localhost:3001/books";

const body = document.body;
const selects = document.querySelectorAll("select");
const genresSelect = selects[0];
const booksSelect = selects[1];
const img = document.querySelector("img");
let booksJson = [];

const genres = await fetch(endpointGenres);
const genresJson = await genres.json();

genresJson.forEach((genre) => {
  const option = createOption(genre.value, genre.text);
  genresSelect.appendChild(option);
});

genresSelect.addEventListener("change", async (event) => {
  const genre = event.target.value;
  const books = await fetch(endpointBooks + `?genre=${genre}`);
  booksJson = await books.json();
  booksSelect.innerHTML = "";
  booksJson.forEach((book, index) => {
    const text = index === 0 ? "Select book" : book.name;
    const option = createOption(text, text);
    booksSelect.appendChild(option);
  });
});

booksSelect.addEventListener("change", (event) => {
  const book = event.target.value;
  img.src =
    book === "Select book"
      ? "default.png"
      : booksJson.find((b) => b.name === book)?.cover || "default.png";
});
