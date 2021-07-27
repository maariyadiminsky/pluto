import React from "react";

import "../css/DisplayDiv.css";

const renderMonths = (data, handleChoose) => (
    data.map(dataItem => (
        <div className="column display-div-container" key={dataItem}>
            <button className="ui massive violet button floating message fluid display-div" onClick={() => handleChoose(dataItem)}>
                {dataItem}
            </button>
        </div>
    ))
);

const DisplayDiv = ({ data, handleChoose, shouldMonthSelectionHide, columnsAmount }) => {
    return (
        <div className={`display-divs ${shouldMonthSelectionHide ? "disappear-animation" : ""}`}>
            <h1>Which month were you born?</h1>
            <div className={`ui ${columnsAmount} column center aligned grid display-divs-items`}>
                {renderMonths(data, handleChoose)}
            </div>
        </div>
    )
}

export default DisplayDiv;