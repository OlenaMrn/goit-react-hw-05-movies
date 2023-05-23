import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API/movieApi';
import css from './Cast.module.css';
import { OvalLoader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(response => {
        setCast(response.cast);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <div className={css.loaderWrap}><OvalLoader/></div>;
  }

  if (cast.length === 0) {
    return <p className={css.reviewText}>No Cast Found</p>;
  }

  return (
    <div className={css.container}>
      {cast.map(
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
      )}
    </div>
  );
};

export default Cast;
