import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getMoviesBySearch } from 'API/movieApi';
import { useLocation } from 'react-router-dom';


const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
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
    setSearchQuery(event.target.value);
  };

    const handleSearchButtonClick = event => {
      event.preventDefault();
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
  }, [searchParams]);

  return (
    <div>
      <Link to={backLinkRef.current}>BACK</Link>
      <p>Search for movies</p>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearchButtonClick}>Search</button>

      {movies && movies.length === 0 && <p>No movies found</p>}

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
