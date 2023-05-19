import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './Movie.module.css'
import { CgArrowTopLeftO } from 'react-icons/cg';

export const Movie = () => {
  

  return (
    <div>
    
      <MovieCard />
    </div>
  );
};

export default Movie;


//   <Link to={backLinkRef.current} className={css.backLink}>
//     {' '}
//     <div className={css.back}>
//       <span className={css.icon}>
//         <CgArrowTopLeftO />
//       </span>
//       {/* <span>return back</span> */}
//     </div>
//   </Link>;