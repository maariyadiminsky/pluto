import React from "react";

import "../css/Result.css";

const Result = ({ number, type, details }) => {
    return (
        <div className="result">
            <div className="result ui card centered">
                <div className="content">
                    <h1>Life Path</h1>
                    <div className="center aligned description">
                        <p>You are a number 3 life path.</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        Learn More...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;