import React, { useState, useEffect, useRef } from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'API/movieApi';
import css from './MovieDetails.module.css';
import { CgArrowTopLeftO } from 'react-icons/cg';
import placeholderImage from '../../img/NoPoster.webp';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const backLinkRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleImageError = event => {
    event.target.src = placeholderImage;
  };

  return (
    <div>
      {movie && (
        <div>
          <Link to={backLinkRef.current} state={{ from: location }}>
            <div className={css.back}>
              <span className={css.icon}>
                <CgArrowTopLeftO />
              </span>
              {/* <span>return back</span> */}
            </div>
          </Link>
          <div className={css.cardWrap}>
            <h3 className={css.movieTitle}>{movie.title}</h3>

            <div className={css.movieImgWrap}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={css.movieImg}
                onError={handleImageError}
              />
              <div>
                <p className={css.movieText}>{movie.overview}</p>
                <p className={css.movieInfo}>
                  Release Date: {movie.release_date}
                </p>
                <div className={css.movieInfo}>
                  <p className={css.movieVote}>Genres:</p>{' '}
                  {movie.genres.map(genre => genre.name).join(', ')}
                </div>
                <p className={css.movieVote}>
                  User Score: {movie.vote_average}
                </p>
              </div>
            </div>
          </div>

          {/* <p>Additional information</p> */}

          <Link to={`/movies/${movieId}/cast`} className={css.adLink}>
            Cast
          </Link>

          <Link to={`/movies/${movieId}/review`} className={css.adLink}>
            Review
          </Link>

          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
