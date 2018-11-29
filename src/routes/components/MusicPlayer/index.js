import React from 'react';

const MusicPlayer = (props) => {
  const { isMusicPlaying, currentMusic } = props;
  return (
    <div className="music_player">
      <div className="player_profile">
        <img
          src={currentMusic ? currentMusic.thumbnail: ''}
          className="player_thumbnail"
          alt={''}
        />
      </div>
      <div className="player_info">
        <i className="player_title">
          {currentMusic ? currentMusic.title : '제목'}
        </i>
        <i className="player_artist">
          {currentMusic ? currentMusic.artist : '가수'}
        </i>
      </div>
      <button 
        type="button"
        className="player_more"
        >
        <i className="blind">재생목록</i>
      </button>
    </div>
  );
};

export default MusicPlayer;