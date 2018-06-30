import React, { Component } from 'react';

class Textbook extends Component {

    render(){
        return(
            <div>
                <iframe src={this.props.link} align="middle" height="700" width="95%" frameBorder="0"/>
             </div>
        )
    }
}

export default Textbook;