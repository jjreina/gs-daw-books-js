import { Genre } from "../classes/Genre";

export const parserToGenresClass = (literalObjectGenres) => {
  return new Promise((resolve, reject) => {
    if (literalObjectGenres === null || literalObjectGenres === undefined) {
      reject("Error: literalObjectGenres is null or undefined");
    } else {
      const genres = literalObjectGenres.map((genre) => {
        return new Genre(genre.text, genre.value);
      });
      resolve(genres);
    }
  });
};
