import React from 'react';

class NewTweetControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisible: false};
    this.handleDisplayingNewTweetForm = this.handleDisplayingNewTweetForm.bind(this);
  }

  handleDisplayingNewTweetForm(event){
    this.setState({formVisible: true});
    console.log(this.state);
  }

  render(){
    return (
      <button onClick={this.handleDisplayingNewTweetForm}>Give Blessing...</button>
    );
  }
}

export default NewTweetControl;
