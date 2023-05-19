import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getMoviesBySearch } from 'API/movieApi';
import { useLocation } from 'react-router-dom';
import css from './Movies.module.css';
import { CgArrowTopLeftO } from 'react-icons/cg';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') || '';
  console.log(movieName);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

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
    if (searchQuery) {
      handleSearch();
    }
  };

  useEffect(() => {
    // Отримання значення параметра 'query' з URL-адреси
    const queryParam = searchParams.get('query');
    // Оновлення пошукового рядка при завантаженні сторінки
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    setSearchQuery('');
  }, [searchParams]);

  return (
    <div>
      <Link to={backLinkRef.current} className={css.backLink}>
        {' '}
        <div className={css.back}>
          <span className={css.icon}>
            <CgArrowTopLeftO />
          </span>
          {/* <span>return back</span> */}
        </div>
      </Link>
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
              <Link to={`/movies/${movie.id}`} className={css.filmLink}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
