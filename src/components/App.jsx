import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/movies';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import Movie from 'pages/Movie/Movie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:movieId" element={<div>Movie Card</div>} />
        </Route>
      </Routes>
    </div>
  );
};
