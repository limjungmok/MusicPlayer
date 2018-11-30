import React from 'react';

const MusicPlayer = (props) => {
  const { isPlaying, currentMusic, currnetPlayingTime } = props;
  const __temp__value = 10;
  const playerGaugeStyle = {
    width: `${__temp__value}%`
  };

  return (
    <div className="music_player">
      <span className="player_gauge">
        <i 
          style={playerGaugeStyle}
          className="player_gauge_value" />
      </span>
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
      <button className="player_more" aria-label="재생목록" />
    </div>
  );
};

export default MusicPlayer;