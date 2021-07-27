import React, { Component } from "react";
import Result from "../components/Result";
import { getLifePathNumber, getAttitudeNumber, getDayNumberFull, getNumerologySingleNumber } from "../utils/numerologyUtils";

import "../css/Page.css";

class ResultsPage extends Component {
    state = {
        lifePathNumber: 0,
        lifePathReport: "",

        attitudeNumber: 0,
        attitudeReport: "",

        characterNumber: 0,
        characterReport: ""
    }

    generateReport() {
        const { month, day, year } = this.props;

        
    }

    renderItems = () => {

    }

    render() {
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
}

export default ResultsPage;