import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

function TweetFeed(props) {
  
  console.log(props.tweetList);
  return (
    <div>
      {props.tweetList.map((tweet, index) =>
        <Tweet img={tweet.img}
               title={tweet.title}
               content={tweet.content}
               key={index}/>
      )}
    </div>
  );
}

TweetFeed.propTypes = {
  tweetList: PropTypes.array
};

export default TweetFeed;
