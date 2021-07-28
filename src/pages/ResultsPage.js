import React, { PureComponent } from "react";
import Result from "../components/Result";

import "../css/Page.css";
import numerologyApi from "../api/numerology";

import { getLifePathNumber, getAttitudeNumber, getDayNumberFull } from "../utils/numerologyUtils";
import { LifePath, Attitude, Character } from "../const/generalConst";

class ResultsPage extends PureComponent {
    state = {
        lifePathNumber: 0,
        lifePathReport: {},

        attitudeNumber: 0,
        attitudeReport: {},

        characterNumber: 0,
        characterReport: {},    
    }

    componentDidMount = () => {
        const { month, day, year } = this.props;

        // create report
        this.getNumerology(month, day, year);
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { lifePathNumber, attitudeNumber, characterNumber } = this.state;

        if (lifePathNumber !== prevState.lifePathNumber && attitudeNumber !== prevState.attitudeNumber && characterNumber !== prevState.characterNumber) {
            this.getReport();
        }
    }

    getNumerologyData = async(type, number) => {
        const response = await numerologyApi.get(`/${type}/${number}`);

        if (response && response.data) {
            switch(type) {
                case LifePath.path:
                    this.setState((prevState) => ({ lifePathReport: {...prevState.lifePathReport, ...response.data } }));
                    break;
                case Attitude.path:
                    this.setState((prevState) => ({ attitudeReport: {...prevState.attitudeReport, ...response.data } }))
                    break;    
                case Character.path:
                    this.setState((prevState) => ({ characterReport: {...prevState.characterReport, ...response.data } }))
                    break;  
                default:
                    break;     
            }
        }
    }

    getNumerology = (month, day, year) => {
        this.setState({
            lifePathNumber: getLifePathNumber(month, day, year),
            attitudeNumber: getAttitudeNumber(month, day),
            characterNumber: getDayNumberFull(day)
        })
    }

    // todo: yes I'm aware using 3 requests isn't idle here, but since the api was created quickly it's a short-term solution just to present other parts of the app(continued below).
    // todo: ...long-term solution is to implement GraphQL + api improvements + use a single request.
    getReport = () => {
        const { lifePathNumber, attitudeNumber, characterNumber } = this.state;

        this.getNumerologyData(LifePath.path, lifePathNumber);
        this.getNumerologyData(Attitude.path, attitudeNumber);
        this.getNumerologyData(Character.path, characterNumber);
    }

    render() {
        const { 
            lifePathNumber, lifePathReport, 
            attitudeNumber, attitudeReport, 
            characterNumber, characterReport 
        } = this.state;

        return (
            <div className="page ui grid">
                <div className="three column row">
                    <Result
                        number={attitudeNumber}
                        header={Attitude.header}
                        sentence={Attitude.sentence}
                        report={attitudeReport}
                    />
                    <Result
                        number={lifePathNumber}
                        header={LifePath.header}
                        sentence={LifePath.sentence}
                        report={lifePathReport}
                    />
                    <Result
                        number={characterNumber}
                        header={Character.header}
                        sentence={Character.sentence}
                        report={characterReport}
                    />
                </div>
            </div>
        );
    }
}

export default ResultsPage;