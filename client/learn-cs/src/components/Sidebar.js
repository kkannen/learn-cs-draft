import React, { Component } from 'react';
import SideBarModule from './SideBarModule';

class Sidebar extends Component {

    render(){
        return(
            <div className="sidebar" style={{width:"25%", border: "1px solid black", height:700, position:"fixed"}}>
                <SideBarModule progress={this.props.progress}/>
            </div>
        )
    }
}

export default Sidebar;