import React from 'react';

function Suggestion(props) {
  var imgStyle = {
    maxWidth: "50",
    display: "inline-block",
    margin: "10",
    marginLeft: "20"
  }
  var handleStyle = {
    marginLeft: "20",
    display: "inline-block",
    width: "50%"
  }
  return(
    <div>
      <img style={imgStyle} src={props.img}/>
      <div style={handleStyle}>
        <h3>{props.name}</h3>
        <button>{props.follow}</button>
      </div>
    </div>
  )
}

export default Suggestion;
