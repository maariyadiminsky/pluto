import React from "react";

import "../css/DisplayDiv.css";

const renderDivs = (data, handleChoose, buttonSize) => (
    data.map(dataItem => (
        <div className="column display-div-container" key={dataItem}>
            <button className={`ui ${buttonSize} violet button floating message fluid display-div`} onClick={() => handleChoose(dataItem)}>
                {dataItem}
            </button>
        </div>
    ))
);

const DisplayDiv = ({ data, handleChoose, shouldMonthSelectionHide, columnsAmount, buttonSize, question }) => {
    return (
        <div className={`display-divs ${shouldMonthSelectionHide ? "disappear-animation" : ""}`}>
            <h1>{question}</h1>
            <div className={`ui ${columnsAmount} column center aligned grid display-divs-items`}>
                {renderDivs(data, handleChoose, buttonSize)}
            </div>
        </div>
    )
}

export default DisplayDiv;