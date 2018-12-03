import React from 'react';
import RecentMusic from './RecentMusic';
import LoadingView from '../Loading';

const RecentMusicList = ({ isRecentsLoaded, handleSelectMusic, recents}) => {
  if(!isRecentsLoaded) {
    return (
      <div className="recents">
        <LoadingView />
      </div>
    );
  } else {
    return (
      <div className="recents">
        {recents.map((recent, index) => (
          <RecentMusic 
            recent = {recent}
            handleSelectMusic = {handleSelectMusic}
            key = {index}
          />
        ))}
      </div>
    );
  }
};

export default RecentMusicList;