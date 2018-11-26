import React from 'react';
import Genre from './Genre';

const GenreList = ({ genreArray }) => (
  <div className="genres">
    {genreArray.map((genre, i) => (
      <Genre 
        genre={genre}
        key={i}
      />
    ))}
  </div>
);

export default GenreList;