import React from 'react';
import Recommend from './Recommend';

const RecommendList = ({ recommends }) => {
  return (
    <div className="recommends">
      {recommends.map((recommend, i) => (
        <Recommend 
          recommend={recommend}
          key={i}
        />
      ))}
    </div>
  );
};

export default RecommendList;