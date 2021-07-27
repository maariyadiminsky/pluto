import React, { Component } from "react";
import Result from "../components/Result";

import "../css/Page.css";

class ResultsPage extends Component {
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