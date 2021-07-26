import React, { Component } from "react";
import Month from "../components/Month";

import "../css/FrontPage.css";

import { MonthToNum } from "../const/generalConst";

// add steps to the top

class FrontPage extends Component {
    state = {
        month: 1,
        day: 1,
        year: 1991
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
    }

    handleChooseMonth = (month) => {
        this.setState({ month: MonthToNum[month] });
    }

    render() {
        return (
            <div className="front-page">
                <Month handleChooseMonth={this.handleChooseMonth}/>
                {/* <form onSubmit={this.handleOnFormSubmit} >

                </form> */}
            </div>
        )
    }
}

export default FrontPage;