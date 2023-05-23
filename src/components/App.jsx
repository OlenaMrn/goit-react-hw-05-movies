import { Route, Routes } from 'react-router-dom';
import { lazy} from 'react';

import Layout
  from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/movies'));

const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review'));
const MovieCard = lazy(() => import('../components/MovieDetails/MovieDetails'));



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

