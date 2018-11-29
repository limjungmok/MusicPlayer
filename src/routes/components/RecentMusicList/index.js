import React from 'react';
import RecentMusic from './RecentMusic';

const RecentMusicList = ({ handleSelectMusic, recents }) => (
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

export default RecentMusicList;