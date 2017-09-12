import React from 'react';

class NewTweetControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisible: false};
  }

  handleDisplayingNewTweetForm(event){
    console.log("This werks yo!");
  }

  render(){
    return (
      <button onClick={this.handleDisplayingNewTweetForm}>Give Blessing...</button>
    );
  }
}

export default NewTweetControl;
