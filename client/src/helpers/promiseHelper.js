import { Genre } from "../classes/Genre";

export const parserToGenresClass = (literalObjectGenres) => {
  return new Promise((resolve, reject) => {
    if (literalObjectGenres === null || literalObjectGenres === undefined || literalObjectGenres.length === 0) {
      reject("Error: literalObjectGenres is null or undefined");
    } else {
      const genres = literalObjectGenres.map((genre) => {
        return new Genre(genre.text, genre.value);
      });
      resolve(genres);
    }
  });
};
