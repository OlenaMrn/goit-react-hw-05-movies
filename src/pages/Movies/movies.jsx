import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMoviesBySearch } from 'API/movieApi';
import css from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSearch = async () => {
    try {
      const response = await getMoviesBySearch(searchQuery);
      setMovies(response.results);
      setSearchParams({ query: searchQuery });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = event => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = event => {
    event.preventDefault();
    if (searchQuery) {
      handleSearch();
    }
  };

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    setSearchQuery('');
  }, [searchParams]);

  return (
    <div>
      <p className={css.search}>Let's search!</p>
      <input
        type="text"
        className={css.input}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={css.searchButton} onClick={handleSearchButtonClick}>
        Search
      </button>
      {movies && movies.length === 0 && (
        <p className={css.noResults}>No search results. Please, try again</p>
      )}

      <ul className={css.filmList}>
        {movies &&
          movies.map(movie => (
            <li className={css.filmListItem} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                  search: `?query=${searchQuery}`,
                }}
                className={css.filmLink}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
