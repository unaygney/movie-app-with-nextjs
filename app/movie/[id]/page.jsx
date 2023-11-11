import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function MoviePage({ params }) {
  await delay(1000);

  const movie = Movies.results.find((e) => e.id === +params.id);

  if (!movie) {
    notFound();
  }
  return <MovieContainer movie={movie} />;
}

export default MoviePage;
