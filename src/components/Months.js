import React from "react";
import { Months } from "../const/generalConst";

import "../css/Months.css";

const renderMonths = (handleChooseMonth) => (
    Months.map(month => (
        <div className="column month-container" key={month}>
            <button className="ui massive violet button floating message fluid month" onClick={() => handleChooseMonth(month)}>
                {month}
            </button>
        </div>
    ))
);

const Month = ({ handleChooseMonth, shouldMonthSelectionHide }) => {
    return (
        <div className={`months ${shouldMonthSelectionHide ? "disappear-animation" : ""}`}>
            <h1>What month were you born?</h1>
            <div className="ui four column center aligned grid months-items">
                {renderMonths(handleChooseMonth)}
            </div>
        </div>
    )
}

export default Month;