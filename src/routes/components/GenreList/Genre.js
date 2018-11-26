import React from 'react';

const Genre = (props) => {
  const { title, thumbnail, link } = props.genre
  return (
    <a 
    href={link} 
    className="genre">
    <figure className="genre_profile">
    <img 
      src={thumbnail}
      className="genre_thumbnail"
      alt=''
    />
    </figure>
    <b className="genre_title">{title}</b>
  </a>
  );
};

export default Genre;