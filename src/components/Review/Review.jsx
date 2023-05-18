import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/movieApi';
import css from './Review.module.css'

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

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
