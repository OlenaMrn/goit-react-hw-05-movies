import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API/movieApi';
import css from './Cast.module.css'

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(response => {
        setCast(response.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div className={css.container}>
      {cast.length ? (
        cast.map(
          ({ original_name, profile_path }) =>
            profile_path && (
              <div key={original_name} className={css.imageWrap}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  className={css.castImg}
                />
                <p className={css.castName}>{original_name}</p>
              </div>
            )
        )
      ) : (
        <p className={css.reviewText}>No Cast Found</p>
      )}
    </div>
  );
};

export default Cast;
