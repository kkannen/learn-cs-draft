import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


class SideBarModule extends Component {
    renderProgress = () => {
        if (this.props.progress < 100) {
          return (
            <LinearProgress style={{width:"80%", marginLeft: "10%", height: 8}} color="secondary" variant="determinate" value={this.props.progress} />
          )
        } else{
          return (
              <LinearProgress style={{width:"80%", marginLeft: "10%", height: 8}} variant="determinate" value={this.props.progress} />
          )
        }
      }

    render(){
        return(
            <div className="sideBarModule">
                <h1>Title</h1>
                <p>descripton blah blah poo</p>
                {this.renderProgress()}
            </div>
        )
    }
}

export default SideBarModule;