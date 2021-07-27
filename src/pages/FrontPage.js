import React, { Component } from "react";
import DisplayDiv from "../components/DisplayDiv";

import "../css/FrontPage.css";

import { Months, MonthToNum, Days } from "../const/generalConst";

// add steps to the top

class FrontPage extends Component {
    state = {
        month: 1,
        day: 1,
        year: 1991,

        shouldMonthSelectionHide: false,
        shouldDaySelectionHide: false,

        shouldShowMonthSelection: true,
        shouldShowDaySelection: false,
        shouldShowYearSelection: false
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
    }

    handleChooseMonth = (month) => {
        this.setState({ 
            month: MonthToNum[month], 
            shouldMonthSelectionHide: true,
        });

        setTimeout(() => {
            this.setState({ 
                shouldShowMonthSelection: false,
                shouldShowDaySelection: true
            });
        }, 2000);
    }

    handleChooseDay = (day) => {
        this.setState({ 
            day: parseInt(day), 
            shouldDaySelectionHide: true,
        });

        setTimeout(() => {
            this.setState({ 
                shouldShowDaySelection: false,
                shouldShowYearSelection: true
            });
        }, 2000);
    }

    renderItems = () => {
        if (this.state.shouldShowMonthSelection) {
            return (
                <DisplayDiv 
                data={Months}
                handleChoose={this.handleChooseMonth} 
                shouldMonthSelectionHide={this.state.shouldMonthSelectionHide}
                columnsAmount="four"
                buttonSize="massive"
                question="Which month were you born?"
            />
            )
        } else if (this.state.shouldShowDaySelection) {
            return (
                <DisplayDiv
                data={Days}
                handleChoose={this.handleChooseDay}
                shouldMonthSelectionHide={this.state.shouldDaySelectionHide}
                columnsAmount="seven"
                buttonSize="medium"
                question="Thanks! Which day?"
            />
            )
        }
    }

    render() {
        return (
            <div className="front-page">
                {this.renderItems()}
            </div>
        )
    }
}

export default FrontPage;