import React from 'react';
import NewTweetForm from "./NewTweetForm";
import PropTypes from "prop-types";

class NewTweetControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {
      formVisible: false
    };
  }

  showForm() {
    this.setState({formVisible: true});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  handleDisplayingNewTweetForm(event){
    this.setState({formVisible: true});
    console.log(this.state);
  }

  render(){
    const formVisible = this.state.formVisible;
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewTweetForm
        onNewTweetCreation={this.props.onNewTweetCreation}
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Give Blessing...</button>
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
