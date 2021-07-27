import React, { Component } from "react";
import Result from "../components/Result";
import { getLifePathNumber, getAttitudeNumber, getDayNumberFull, getNumerologySingleNumber } from "../utils/numerologyUtils";

import "../css/Page.css";

const ResultsPage = () => {
    return (
        <div className="page ui grid">
            <div className="three column row">
                <Result
                    number={3}
                    type={"LifePath"}
                    details={"This means...."}
                />
                <Result
                    number={2}
                    type={"Attitude"}
                    details={"This means...."}
                />
                <Result
                    number={3}
                    type={"Character"}
                    details={"This means...."}
                />
            </div>
        </div>
    );
}

export default ResultsPage;