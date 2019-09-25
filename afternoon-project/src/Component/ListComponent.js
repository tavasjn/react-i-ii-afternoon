import React, {Component} from 'react';

class ListComponent extends Component {
    
    render(){
        return(
            <div className="favoriteList">
                    <strong>Favorite Movies:</strong>
                    <ol>
                        <li>{this.props.Data[this.props.currentData].favoriteMovies[0]}</li>
                        <li>{this.props.Data[this.props.currentData].favoriteMovies[1]}</li>
                        <li>{this.props.Data[this.props.currentData].favoriteMovies[2]}</li>
                    </ol>
                </div>
        )
    }
}

export default ListComponent;