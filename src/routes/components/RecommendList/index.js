import React from 'react';
import Recommend from './Recommend';

const RecommendList = ({ recommendArray }) => {
  return (
    <div className="recommends">
    {recommendArray.map((recommend, i) => (
        <Recommend 
            recommend={recommend}
            key={i}
        />
    ))}
    </div>
  );
};

export default RecommendList;