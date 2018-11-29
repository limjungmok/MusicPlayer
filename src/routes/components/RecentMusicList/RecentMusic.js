import React from 'react';

const RecentMusic = (props) => {
  const { title, artist, thumbnail } = props.recent;
  const handleClick = (e) => {
    e.preventDefault();
    props.handleSelectMusic(props.recent);
  }

  return (
    <a 
      href="#" 
      onClick = {handleClick}
      className="recent">
      <figure className="recent_profile">
        <img 
          src = {thumbnail}
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