import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'API/movieApi';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setFilms(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {films.map(el => {
          return (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>
                {el.title ? el.title : el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
