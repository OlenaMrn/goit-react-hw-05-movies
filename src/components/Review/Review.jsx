import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/movieApi';

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
    <div>
      {reviews.length ? (
        reviews.map(({ author, content }) => (
          <div key={author}>
            <p>{author}</p>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>No Reviews Found</p>
      )}
    </div>
  );
};

export default Review;
