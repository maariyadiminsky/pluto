import React, { Component } from "react";
import Months from "../components/Months";

import "../css/FrontPage.css";

import { MonthToNum } from "../const/generalConst";

// add steps to the top

class FrontPage extends Component {
    state = {
        month: 1,
        day: 1,
        year: 1991,

        shouldMonthSelectionHide: false
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
    }

    handleChooseMonth = (month) => {
        this.setState({ 
            month: MonthToNum[month], 
            shouldMonthSelectionHide: true 
        });
    }

    render() {
        return (
            <div className="front-page">
                <Months handleChooseMonth={this.handleChooseMonth} shouldMonthSelectionHide={this.state.shouldMonthSelectionHide}/>
                {/* <form onSubmit={this.handleOnFormSubmit} >

                </form> */}
            </div>
        )
    }
}

export default FrontPage;