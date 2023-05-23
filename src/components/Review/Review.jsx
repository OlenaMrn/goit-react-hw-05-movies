import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/movieApi';
import { OvalLoader } from 'components/Loader/Loader';
import css from './Review.module.css'

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



   useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(response => {
        setReviews(response.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [movieId]);

if (isLoading) {
  return (
    <div className={css.loaderWrap}>
      <OvalLoader />
    </div>
  );
}

if (reviews.length === 0) {
  return <p className={css.noReviewText}>No Review Found</p>;
}


  return (
    <div className={css.container}>
      {reviews.length ? (
        reviews.map(({ author, content }) => (
          <div key={author} className={css.reviewWrap}>
            <p className={css.reviewAuthor}>{author}</p>
            <p className={css.reviewText}>{content}</p>
          </div>
        ))
      ) : (
        <p className={css.reviewText}>No Reviews Found</p>
      )}
    </div>
  );
};

export default Review;
