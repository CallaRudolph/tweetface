import React from "react";
import Tweet from "../models/tweet.js";

class NewTweetForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewTweetSubmission = this.handleNewTweetSubmission.bind(this);
  }

  handleNewTweetSubmission(event) {
    event.preventDefault();
    const {_img, _title, _content} = this.refs;
    var newTweet = new Tweet(_img.value, _title.value, _content.value);
    console.log(newTweet);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewTweetSubmission}>
          <input
            ref="_img"
            type="text"
            id="img"
            placeholder="image URL"/>
          <input
            ref="_title"
            type="text"
            id="title"
            placeholder="enter title"/>
          <input
            ref="_content"
            type="text"
            id="content"
            placeholder="enter blessing"/>
          <button type="submit">Send blessing.</button>
        </form>
      </div>
    );
  }
}

export default NewTweetForm;
