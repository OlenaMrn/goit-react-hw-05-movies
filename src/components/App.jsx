import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/movies';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import MovieCard from './MovieDetails/MovieDetails';



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<h2>PAGE NOT FOUND</h2>} />
        </Route>
      </Routes>
    </>
  );
};

