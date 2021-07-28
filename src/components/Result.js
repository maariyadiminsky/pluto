import React from "react";

import "../css/Result.css";
const Result = ({ number, header, sentence, report}) => {
    const renderLink = () => report && report.link ?  (
        <div className="extra content">
            <div className="center aligned author">
                <a href={report.link} target="_blank" rel="noreferrer">Learn more...</a>
            </div>
        </div>
    ) : "";

    const renderDescription = () => report && report.description ? report.description : "";

    return (
        <div className="result column">
            <div className="result ui card centered">
                <div className="content">
                    <h1>{header}</h1>
                    <div className="center aligned description">
                        <p>{`You are a number ${number} ${sentence}.`}</p>
                        <p>{renderDescription()}</p>
                    </div>
                </div>
                {renderLink()}
            </div>
        </div>
    )
}

export default Result;