import React, { useState, useCallback } from 'react';
import Row from './components/Row';
import TextArea from './components/TextArea';
import Title from './components/Title';

export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            queString: '',
            ansString: ''
        }

        this.changeVal = this.changeVal.bind(this)
    }



    clearData() {
        this.setState({
            result: 0
        })
    }
    render() {
        console.log(this.state);
        return (
            <>
                <div className="card mt-5 mx-5" style={{ width: 15 + '%' }}>
                    <div className="card-title mt-3">
                        <Title title="Calculator App by React" />
                    </div>
                    <div className="card-body">
                        <TextArea ansValue={this.state.ansString} queVal={this.state.queString} />
                        <div className="row">
                            <div className="col-12 mt-2">
                                <Row text={[{ text: "CE", onClick: this.changeVal }, { text: "<-", onClick: this.changeVal }, { text: "(", onClick: this.changeVal }, { text: ")", onClick: this.changeVal }]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <Row text={[{ text: "7", onClick: this.changeVal }, { text: "8", onClick: this.changeVal }, { text: "9", onClick: this.changeVal }, { text: "/", onClick: this.changeVal }]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <Row text={[{ text: "4", onClick: this.changeVal }, { text: "5", onClick: this.changeVal }, { text: "6", onClick: this.changeVal }, { text: "*", onClick: this.changeVal }]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <Row text={[{ text: "1", onClick: this.changeVal }, { text: "2", onClick: this.changeVal }, { text: "3", onClick: this.changeVal }, { text: "-", onClick: this.changeVal }]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <Row text={[{ text: "0", onClick: this.changeVal }, { text: ".", onClick: this.changeVal }, { text: "=", onClick: this.changeVal }, { text: "+", onClick: this.changeVal }]} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    changeVal = (e) => {
        switch (e.target.value) {
            case "CE": {
                this.setState({ queString: '', ansString: '' });
                break;
            }
            case "<-": {
                var str = this.state.queString;
                str = str.substr(0, str.length - 1);
                this.setState({ queString: str });
                break;
            }
            case "=": {
                if (this.state.queString !== '') {
                    var ans = '';
                    try {
                        ans = eval(this.state.queString);
                    }
                    catch (err) {
                        this.setState({ ansString: "Math Error" });
                    }
                    if (ans === undefined)
                        this.setState({ ansString: "Math Error" });
                    else
                        this.setState({ ansString: ans, queString: '' });
                    break;
                }
            }
            default: {
                this.setState({ queString: this.state.queString += e.target.value })
                break;
            }
        }

    }
}