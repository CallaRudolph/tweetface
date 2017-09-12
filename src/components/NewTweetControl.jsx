import React from 'react';
import NewTweetForm from "./NewTweetForm";
import PropTypes from "prop-types";

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

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
}

export default NewTweetControl;
