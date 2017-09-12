import React from 'react';
import PropTypes from 'prop-types';

class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.addLikes = this.addLikes.bind(this);
    this.state = {
      likes: 0,
    };
  }

  addLikes() {
    var newLike = this.state.likes + 1;
    this.setState({likes: newLike});
  }

  render() {
    var imgStyle = {
      maxWidth: "50",
      display: "inline-block",
      margin: "10",
      marginLeft: "20"
    }

    var tweetStyle = {
      marginLeft: "20",
      display: "inline-block",
      width: "50%"
    }

    var likeStyle = {
      display: "inline-block",
      float: "right",
      paddingTop: "20"
    }

    return(
      <div>
        <img style={imgStyle} src={this.props.img}/>
        <div style={tweetStyle}>
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
        <div style={likeStyle}>
          <button onClick={this.addLikes}>Like</button>
          <p>Likes: {this.state.likes}</p>
        </div>
        <hr/>
      </div>
    );
  }
}

Tweet.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Tweet;
