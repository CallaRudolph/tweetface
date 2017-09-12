import React from 'react';
import PostInput from './PostInput';
import TweetFeed from './TweetFeed';
import NewTweetControl from './NewTweetControl';

class Centerbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTweetList: [],
    };
  }

  render() {
    return (
      <div>
        <NewTweetControl/>
        <PostInput/>
        <hr/>
        <TweetFeed
          tweetList = {this.state.masterTweetList}/>
      </div>
    );
  }
}

// proptype

export default Centerbox;
