import { Genre } from "../classes/Genre";

export const parserToGenresClass = (literalObjectGenres) => {
  return new Promise((resolve, reject) => {
    if (literalObjectGenres === null || literalObjectGenres === undefined || literalObjectGenres.length === 0) {
      let error = new Error("literalObjectGenres is null or undefined");
      error.name = "ParserGenresError";
      reject(error);
    } else {
      const genres = literalObjectGenres.map((genre) => {
        return new Genre(genre.text, genre.value);
      });
      resolve(genres);
    }
  });
};
