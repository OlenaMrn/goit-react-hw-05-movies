import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation} from 'react-router-dom';
import { getMovieById } from 'API/movieApi';


const MovieCard = () => {
  const { movieId } = useParams();
    const [movie, setMovie] = useState(null);


    
//   const BackLinkLocationRef = userRef(location.state ?.from. ?? './movies');

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

  return (
    <div>
      {/* <h2>Movie Card for Movie ID: {movieId}</h2> */}
      {movie && (
        <div>
          <h3>{movie.title}</h3>
          <p>User Score: {movie.vote_average}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

         <p>Additional information</p>
           
         
        
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                  <Link to={`/movies/${movieId}/review`}>Review</Link>
        

          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
