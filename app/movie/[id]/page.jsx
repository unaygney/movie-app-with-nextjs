import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function MoviePage({ params }) {
  await delay(1000)
  const movie = Movies.results.find((e) => e.id === +params.id);
  return <MovieContainer movie={movie} />;
}

export default MoviePage;
