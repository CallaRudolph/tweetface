import React from "react";
import Search from "../models/search.js";
import PropTypes from "prop-types";

class Header extends React.Component {

  constructor(props){
    super(props);
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }

  handleNewSearch(event) {
    event.preventDefault();
    const { _search } = this.refs;
    var newSearch = new Search(_search.value);
    this.props.onNewSearch(newSearch);
    console.log(newSearch);
  }

  render(){
    var listStyle = {
      listStyle: "none",
      display: "inline-block",
      marginRight: "30%",
      // textAlign: "center",
    }
    var listItemStyle = {
      border: "solid 1px lightgrey",
      display: "inline",
      padding: "5"
    }
    var inputStyle = {
      margin: "10",
      display: "inline-block"
    }
    return (
      <div style={this.props.headerStyleProp}>
        <ul style={listStyle}>
          <li style={listItemStyle}>Home</li>
          <li style={listItemStyle}>Notifications</li>
          <li style={listItemStyle}>Messages</li>
        </ul>
        <form style={inputStyle} onSubmit={this.handleNewSearch}>
          <input
            ref="_search"
            type="text"
            id="search"
            placeholder="Search Here"></input>
          <button type="submit">Search</button>
        </form>
        <input style={inputStyle} type="text" placeholder="Tweet"></input>
        <hr/>
      </div>
    );
  }
}

Header.propTypes = {
  onNewSearch: PropTypes.func
}

export default Header;
