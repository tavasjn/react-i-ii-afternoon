import React, { Component } from 'react';
import Data from '../data';
import ListComponent from './ListComponent';
import BottomComponent from './BottomComponent';


class CardComponent extends Component {
    constructor() {
        super();

        this.state = {
            currentData: 0
        }
    }

    next = () => {
        let copy = this.state.currentData += 1
        if(this.state.currentData <= 24){
        this.setState({
            currentData: copy
        }) }else {
            this.setState({
                currentData: 0
            })
        }

    }

    previous = () => {
        let backCopy = this.state.currentData -= 1
        if(this.state.currentData >= 0){
            this.setState({
                currentData: backCopy
            }) 
        } else {
            this.setState({
                currentData: 24
            })
        }
    }

    render() {
        return (
            <>
            <div className="wholeCard">
                <div className="display-content">
                    <header className="cardHead">
                        <h4 className="nameTitle">{Data[this.state.currentData].name.first} {Data[this.state.currentData].name.last}</h4>
                        <h5>
                            {`${Data[this.state.currentData].id}/25`}
                        </h5>
                    </header>
                    <div className="about">
                        <div className="aboutMe"><strong>From:</strong> {Data[this.state.currentData].city}, {Data[this.state.currentData].country}</div>
                        <div className="aboutMe"><strong>Job Title:</strong> {Data[this.state.currentData].title}</div>
                        <div className="aboutMe"><strong>Employer:</strong> {Data[this.state.currentData].employer}</div>
                    </div>
                    <p></p>
                    <ListComponent currentData={this.state.currentData} Data={Data}/>
                </div>
                <BottomComponent next={this.next} previous={this.previous}/>
            </div>
            </>
        )
    }
}

export default CardComponent;