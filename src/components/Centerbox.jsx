import React from 'react';
import PostInput from './PostInput';
import TweetFeed from './TweetFeed';
import NewTweetControl from './NewTweetControl';

function Centerbox(props) {

  return (
    <div style={props.styleRuleProp}>
      <NewTweetControl/>
      <PostInput/>
      <hr/>
      <TweetFeed/>
    </div>
  );
}

// proptype

export default Centerbox;
