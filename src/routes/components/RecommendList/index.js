import React from 'react';
import Recommend from './Recommend';
import LoadingView from '../Loading';

const RecommendList = ({ isRecommendsLoaded, recommends }) => {
  if(!isRecommendsLoaded) {
    return (
      <div className="recommends">
        <LoadingView />
      </div>
    );
  } else {
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
  }
};

export default RecommendList;