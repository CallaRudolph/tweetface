import React from "react";

function NewTweetForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          id="img"
          placeholder="image URL"/>
        <input
          type="text"
          id="title"
          placeholder="enter title"/>
        <textarea
          type="text"
          id="content"
          placeholder="enter blessing"/>
        <button type="submit">Send blessing.</button>
      </form>
    </div>
  );
}

export default NewTweetForm;
