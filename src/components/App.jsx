import React from "react";
import Body from "./Body";
import Header from "./Header";
import SearchResults from "./SearchResults";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSearch: [],
    };
    this.addNewSearch = this.addNewSearch.bind(this);
  }

  addNewSearch(newSearch) {
    var newMasterSearch = this.state.masterSearch.slice();
    newMasterSearch.push(newSearch);
    this.setState({masterSearch: newMasterSearch});
  }

  render() {
    var centerAllOfIt = {
      textAlign: "center"
    }
    return(
      <div>
        <Header headerStyleProp={centerAllOfIt} onNewSearch = {this.addNewSearch}/>
        <Body bodyStyleProp={centerAllOfIt}/>
        <SearchResults
          searchList = {this.state.masterSearch}/>
      </div>
    );
  }
}

export default App;
