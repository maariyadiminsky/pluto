import React, { Component } from "react";
import DisplayDiv from "../components/DisplayDiv";
import Year from "../components/Year";

import "../css/Page.css";

import { Months, MonthToNum, Days } from "../const/generalConst";
import { getLifePathNumber, getAttitudeNumber, getDayNumberFull, getNumerologySingleNumber } from "../utils/numerologyUtils";

// add steps to the top

class FrontPage extends Component {
    state = {
        month: 1,
        day: 1,
        year: 1991,

        shouldMonthSelectionHide: false,
        shouldDaySelectionHide: false,
        shouldYearSelectionHide: false,

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
        }, 1500);
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
        }, 1500);
    }

    handleChooseYear = (year) => {
        this.setState({ 
            year: parseInt(year), 
            shouldYearSelectionHide: true,
        });

        setTimeout(() => {
            this.setState({ 
                shouldShowYearSelection: false
            });
        }, 1500);

        console.log(`month: ${this.state.month}, day: ${this.state.day}, year: ${this.state.year}`);
        console.log(`Results day: ${getDayNumberFull(this.state.day)}`);
        console.log(`Results attitude: ${getAttitudeNumber(this.state.month, this.state.day)}`);
        console.log(`Results life path: ${getLifePathNumber(this.state.month, this.state.day, this.state.year)}`);
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
        } else if (this.state.shouldShowYearSelection) {
            return (
                <Year 
                    handleChooseYear={this.handleChooseYear}  
                    shouldYearSelectionHide={this.state.shouldYearSelectionHide}
                />
            )
        }
    }

    render() {
        return (
            <div className="page">
                {this.renderItems()}
            </div>
        )
    }
}

export default FrontPage;