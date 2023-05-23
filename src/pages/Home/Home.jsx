import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTrendingMovies } from 'API/movieApi';
import css from './Home.module.css';

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

  const getMovieYear = (releaseDate) => {
    if (releaseDate) {
      const year = releaseDate.split('-')[0];
      return ` (${year})`;
    }
    return '';
  };

  return (
    <div className={css.container}>
      <h2 className={css.sectionName}>trending today</h2>
      <ul className={css.filmsList}>
        {films.map(el => {
          const movieYear = getMovieYear(el.release_date || el.first_air_date);
          return (
            <li className={css.filmListItem} key={el.id}>
              <Link className={css.filmLink} to={`/movies/${el.id}`}>
                {el.title ? el.title : el.name}
                {movieYear}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


Home.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired,
    })
  ),
};

export default Home;

