import React, { Component } from "react";
import DisplayDiv from "../components/DisplayDiv";

import "../css/FrontPage.css";

import { Months, MonthToNum } from "../const/generalConst";

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
                <DisplayDiv 
                    data={Months}
                    handleChoose={this.handleChooseMonth} 
                    shouldMonthSelectionHide={this.state.shouldMonthSelectionHide}
                    columnsAmount={"four"}
                />
                {/* <form onSubmit={this.handleOnFormSubmit} >

                </form> */}
            </div>
        )
    }
}

export default FrontPage;