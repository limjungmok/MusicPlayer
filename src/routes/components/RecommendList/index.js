import React from 'react';
import Recommend from './Recommend';

const RecommendList = ({ recommends }) => {
  return (
    <div className="recommends">
      {recommends.map((recommend, index) => (
        <Recommend 
          recommend = {recommend}
          key = {index}
        />
      ))}
    </div>
  );
};

export default RecommendList;