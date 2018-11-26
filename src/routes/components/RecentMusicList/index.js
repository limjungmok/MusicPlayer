import React from 'react';
import RecentMusic from './RecentMusic';

const RecentMusicList = ({ recentMusicArray }) => (
  <div className="recents">
    {recentMusicArray.map((recent, i) => (
      <RecentMusic 
        recent={recent}
        key={i}
      />
    ))}
  </div>
);

export default RecentMusicList;