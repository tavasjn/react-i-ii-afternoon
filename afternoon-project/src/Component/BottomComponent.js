import React, {Component} from 'react';


class BottomComponent extends Component {
    render(){
        return(
            <div className="bottomBar">
                <button onClick={this.props.previous}>{'<'} Previous </button>
                <button onClick={this.props.next}>Next {'>'}</button>
            </div>
        )
    }
}

export default BottomComponent;