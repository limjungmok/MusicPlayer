import React from 'react';
import Genre from './Genre';
import LoadingView from '../Loading';

const GenreList = ({ isGenresLoaded, genres }) => {
  if(!isGenresLoaded) {
    return (
      <div className="genres">
        <LoadingView />
      </div>
    );
  } else {
    return (
      <div className="genres">
        {genres.map((genre, i) => (
          <Genre 
            genre={genre}
            key={i}
          />
        ))}
      </div>
    );
  }
};

export default GenreList;