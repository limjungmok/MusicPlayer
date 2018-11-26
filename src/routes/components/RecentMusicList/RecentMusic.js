import React from 'react';

const RecentMusic = (props) => {
  const { title, artist, thumbnail } = props.recent;
  return (
    <a 
      href="#" 
      className="recent">
      <figure className="recent_profile">
        <img 
          src={thumbnail}
          className="recent_thumbnail"
          alt=''
        />
      </figure>
      <b className="recent_title">{title}</b>
      <i className="recent_artist">{artist}</i>
    </a>
  );
};

export default RecentMusic;