import React from 'react';
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
    var centerBoxStyle = {
      display: "inline-block",
      verticalAlign: "top",
      minWidth: "600",
      overflow: "hidden",
      border: "lightgrey 1px solid",
      padding: "10"
    }
    return (
      <div style={centerBoxStyle}>
        <NewTweetControl onNewTweetCreation = {this.addNewTweetToList}/>
        <hr/>
        <TweetFeed
          tweetList = {this.state.masterTweetList}/>
      </div>
    );
  }
}

// proptype

export default Centerbox;
