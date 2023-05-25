import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMoviesBySearch } from 'API/movieApi';
import css from './Movies.module.css';
import { ImSearch } from 'react-icons/im';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async query => {
    try {
      const response = await getMoviesBySearch(query);
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSubmit = (event) => {
     event.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <p className={css.search}>Let's search!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.input}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className={css.searchButton}>
          <ImSearch size={20} className={css.searchIcon} />
        </button>
      </form>
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
                  search: `?query=${searchParams.get('query')}`,
                }}
                state={{ from: location }}
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

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
