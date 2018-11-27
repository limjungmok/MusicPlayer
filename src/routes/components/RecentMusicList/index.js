import React from 'react';
import RecentMusic from './RecentMusic';

const RecentMusicList = ({ recents }) => (
  <div className="recents">
    {recents.map((recent, i) => (
      <RecentMusic 
        recent={recent}
        key={i}
      />
    ))}
  </div>
);

export default RecentMusicList;