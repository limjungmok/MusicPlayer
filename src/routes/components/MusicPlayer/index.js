import React, { Fragment } from 'react';

const playerInfo = (isPlaying, music) => {
  if(!isPlaying) {
    return (
      <i className="player_title">{'노래를 선택해주세요'}</i>
    )
  } else {
    return (
      <Fragment>
        <i className="player_title">{music.title}</i>
        <i className="player_artist">{music.artist}</i>
      </Fragment>
    );
  }
}

const MusicPlayer = (props) => {
  const { 
    isPlaying, 
    currentMusic
  } = props;
  const playerGaugeStyle = {
    width: `${currentMusic.playtime}%`
  };

  return (
    <div className="music_player">
      <span className="player_gauge">
        <i 
          style = { playerGaugeStyle }
          className="player_gauge_value" 
        />
      </span>
      <div className="player_profile">
        <img
          src = { currentMusic ? currentMusic.thumbnail: '' }
          className="player_thumbnail"
          alt={''}
        />
      </div>
      <div className="player_info">
        {playerInfo(isPlaying, currentMusic)}
      </div>
      <button 
        className="player_more" 
        aria-label="재생목록" 
      />
    </div>
  );
};

export default MusicPlayer;