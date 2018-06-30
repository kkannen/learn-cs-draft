import React, { Component } from 'react';

class Chapter extends Component {

    render(){
        return(
            <h3 className="chapter" style={{marginRight: 10}} onClick={this.props.clickEvent}>
                {this.props.chapterNumber}
            </h3>
        )
    }
}

export default Chapter;