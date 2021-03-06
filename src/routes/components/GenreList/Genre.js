import React from 'react';
import { Link } from 'react-router-dom';

const Genre = (props) => {
  const { title, thumbnail, link } = props.genre
  return (
    <Link 
      to={link} 
      className="genre">
      <figure className="genre_profile">
        <img 
          src={thumbnail}
          className="genre_thumbnail"
          alt=''
        />
      </figure>
      <b className="genre_title">{title}</b>
    </Link>
  );
};

export default Genre;