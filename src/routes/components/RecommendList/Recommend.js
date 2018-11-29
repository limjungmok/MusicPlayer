import React from 'react';

const Recommend = (props) => {
  const { title, like, thumbnail, link, count } = props.recommend;
  return (
    <a 
        href = {link}
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
    </a>
  );
};

export default Recommend;