import React from 'react';
import NewTweetForm from "./NewTweetForm";

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
    const formVisible = this.state.formVisible;
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewTweetForm/>
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
