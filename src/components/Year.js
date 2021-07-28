import React, { Component } from "react";

import "../css/Year.css";

class Year extends Component {
    state = { year : ""};

    handleOnFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleChooseYear(this.state.year);
    }
    
    render() {
        return (
            <div className={`year ${this.props.shouldYearSelectionHide ? "disappear-animation" : ""}`}>
                <h1> Ok, great! How about the year? </h1>
                <form onSubmit={this.handleOnFormSubmit} className="ui massive form">
                    <div className="ui huge icon input">
                        <input 
                            className="ui input"
                            placeholder="1989" 
                            type="text" 
                            value = {this.state.year}
                            onChange={({ target: { value }}) => this.setState({ year: value })}
                        />
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default Year;