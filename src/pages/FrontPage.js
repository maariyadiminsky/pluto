import React, { Component } from "react";
import DisplayDiv from "../components/DisplayDiv";
import Year from "../components/Year";

import "../css/Page.css";

import { Months, MonthToNum, Days } from "../const/generalConst";

// add steps to the top

class FrontPage extends Component {
    state = {
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
        this.props.handleSetMonth(MonthToNum[month]);

        this.setState({ 
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
        this.props.handleSetDay(parseInt(day));

        this.setState({ 
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
        this.props.handleSetYear(parseInt(year));

        this.setState({ 
            shouldYearSelectionHide: true,
        });

        setTimeout(() => {
            this.setState({ 
                shouldShowYearSelection: false
            });

            this.props.showResults();
        }, 1500);
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