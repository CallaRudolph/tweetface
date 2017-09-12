import React from "react";
import PropTypes from 'prop-types';

function SearchResults(props) {
  console.log(props.searchList.search);
  // {props.searchList.map((search) =>
  //   {search.search},
  //   console.log({search.search})
  // )}
  return(
    <div>
      <p>Here are your search results: {props.searchList.search}</p>
    </div>
  )
}

export default SearchResults;
