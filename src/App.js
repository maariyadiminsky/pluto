import React, { Component } from "react";
import FrontPage from "./pages/FrontPage";
import ResultsPage from "./pages/ResultsPage";

import "./css/App.css";

class App extends Component {
  state = { 
    month: 1,
    day: 1,
    year: 1991,

    shouldShowResults: false
  }

  handleSetMonth = (month) => {
    this.setState({ month: month });
  }

  handleSetDay = (day) => {
    this.setState({ day: day });
  }

  handleSetYear = (year) => {
    this.setState({ year: year });
  }

  showResults = () => {
    this.setState({ shouldShowResults: true })
  }

  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${"/assets/images/space.jpg"})`}}>
        {/* <img src={"/assets/images/eclipse.jpg"} /> */}
        <FrontPage 
          handleSetMonth={this.handleSetMonth} 
          handleSetDay={this.handleSetDay}
          handleSetYear={this.handleSetYear}
          showResults={this.showResults}
        />
        {/* <ResultsPage /> */}
      </div>
    );
  }
}

export default App;
