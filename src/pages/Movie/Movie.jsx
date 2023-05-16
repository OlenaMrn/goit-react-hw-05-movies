import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';

export const Movie = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLinkRef.current}>BACK</Link>
      <MovieCard />
    </div>
  );
};

export default Movie;
