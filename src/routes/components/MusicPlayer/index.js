import React from 'react';

const MusicPlayer = (props) => {
  const { handleOpenMusicList } = props;
  const handleMusicPlayerOpen = () => {
    handleOpenMusicList();
  }

  return (
    <div className="music_player">
      <div className="player_profile">
        <img
          src={''}
          className="player_thumbnail"
          alt={''}
        />
      </div>
      <div className="player_info">
        <i className="player_title">{'Day1'}</i>
        <i className="player_artist">{'HONNE'}</i>
      </div>
      <button 
        type="button"
        className="player_more"
        onClick={handleMusicPlayerOpen}>
        <i className="blind">재생목록</i>
      </button>
    </div>
  );
};

export default MusicPlayer;