import React from 'react';
import Suggestion from './suggestion';

function RightSide(props) {
  var rightSideStyle = {
    display: "inline-block",
    verticalAlign: "top",
    minWidth: "250",
    overflow: "hidden",
    border: "lightgrey 1px solid",
    padding: "10"
  }
  return(
    <div style={rightSideStyle}>
      <h3>Become A Disciple...</h3>
      <Suggestion
        img="https://didatticattivablog.files.wordpress.com/2016/12/bbe0fbe844c72eea190bf8b51b401be0.jpg"
        name="@SethTheBaptist"
        follow="Follow Me"
      />
      <Suggestion
        img="https://didatticattivablog.files.wordpress.com/2016/12/bbe0fbe844c72eea190bf8b51b401be0.jpg"
        name="@AlaricTheSeeker"
        follow="Follow Me"
      />
      <Suggestion
        img="https://didatticattivablog.files.wordpress.com/2016/12/bbe0fbe844c72eea190bf8b51b401be0.jpg"
        name="@TristanTheChosen"
        follow="Follow Me"
      />
    </div>
  )
}

export default RightSide;
