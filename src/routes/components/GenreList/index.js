import React from 'react';
import Genre from './Genre';

const GenreList = ({ genres }) => (
  <div className="genres">
    {genres.map((genre, i) => (
      <Genre 
        genre={genre}
        key={i}
      />
    ))}
  </div>
);

export default GenreList;