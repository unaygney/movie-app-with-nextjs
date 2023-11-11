import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

function MoviePage({ params }) {
  const movie = Movies.results.find((e) => e.id === +params.id);
  return <MovieContainer movie={movie} />;
}

export default MoviePage;
