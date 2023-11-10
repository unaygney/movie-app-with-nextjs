import React from "react";
import Movies from "@/mocks/movies.json";
import { FeaturedMovie } from "@/components/featured-movie";
import Genres from '@/mocks/genres.json'
import { Categories } from "@/components/categories";

function HomeContainer() {
  return (
    <>
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
      <Categories categories={Genres.genres.slice(0,5)} />
    </>
  );
}

export default HomeContainer;
