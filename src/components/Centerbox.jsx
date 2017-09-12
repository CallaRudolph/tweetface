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
    this.addNewTweetToList = this.addNewTweetToList.bind(this);
  }

  addNewTweetToList(newTweet) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
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
