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
    let formAreaContent = null;
    if (this.state.formVisible) {
      formAreaContent = <h1>Form</h1>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTweetForm}>Give Blessing...</button>
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default NewTweetControl;
