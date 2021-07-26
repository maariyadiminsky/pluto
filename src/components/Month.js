import React from "react";
import { Months } from "../const/generalConst";

import "../css/Month.css";

const renderMonths = (handleChooseMonth) => (
    Months.map(month => (
        <div className="column" key={month}>
            <button className="ui massive violet button floating message fluid month" onClick={() => handleChooseMonth(month)}>
                {month}
            </button>
        </div>
    ))
);

const Month = ({ handleChooseMonth }) => {
    return (
        <div className="months">
            <h1>What month were you born?</h1>
            <div className="ui four column center aligned grid months">
                {renderMonths(handleChooseMonth)}
            </div>
        </div>
    )
}

export default Month;