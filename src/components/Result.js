import React from "react";

import "../css/Result.css";

const LifePath = {
    Header: "Life Path",
    Sentence: "life path"
}

const Character = {
    Header: "Character Number",
    Sentence: "day/character"
}

const Attitude = {
    Header: "Attitude Number",
    Sentence: "attitude"
}

const DataType = {
    LifePath: LifePath,
    Character: Character,
    Attitude: Attitude,
}

const Result = ({ number, type, details }) => {
    const numberType = type === undefined ? DataType[LifePath] : DataType[type];

    return (
        <div className="result column">
            <div className="result ui card centered">
                <div className="content">
                    <h1>{numberType.Header}</h1>
                    <div className="center aligned description">
                        <p>{`You are a number ${number} ${numberType.Sentence}.`}</p>
                        <p>{details}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <a href="#">Learn more...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;