import React, { Component } from 'react';

class Playlist extends Component {

    render(){
        return(
            <div>
              <iframe width="800" height="450" src={this.props.playlist} frameBorder="0" allow="autoplay; encrypted-media" showinfo="1" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Playlist;