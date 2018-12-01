import React from 'react';
import { Route, Link } from 'react-router-dom';

const Recommend = (props) => {
  const { _id, title, like, thumbnail, link, count } = props.recommend;
  return (
    <Link 
        to={`/album/${_id}`}
        className="recommend"
    >
      <figure className="recommend_info">
        <img 
          src = {thumbnail}
          className="recommend_thumbnail"
           alt=''
        />
        <b className="recommend_title">{title}</b>
        <i className="recommend_date">{'2018.11.27'}</i>
        <i className="recommend_like">{like}</i>
        <i className="recommend_count">{count}</i>
        </figure>
    </Link>
  );
};

export default Recommend;