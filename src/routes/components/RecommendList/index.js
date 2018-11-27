import React from 'react';
import Recommend from './Recommend';

const RecommendList = ({ recommendMusicArray }) => {
  return (
    <div className="recommends">
      {recommendMusicArray.map((recommend, i) => (
        <Recommend 
          recommend={recommend}
          key={i}
        />
      ))}
    </div>
  );
};

export default RecommendList;