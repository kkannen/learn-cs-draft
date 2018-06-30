import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Chapter from "./Chapter"
import Playlist from "./Playlist"
import Textbook from "./Textbook"


class Lecture extends Component {
    state = {
        videoVisible: false,
        textbookVisible: false,
        checked: false,
        chapterSelected: null
    }

    handleCheck = () => {
      return (
        this.state.checked ? this.setState({checked: false}) : this.setState({checked: true})
      )
    }

    handleAddProgress = () => {
      if(this.state.checked) {
        return this.props.subtractProgress()
      } if(!this.state.checked) {
        return this.props.addProgress()
      }
    }

    toggleVideo = () => {

        if(this.state.videoVisible) {
          this.setState({videoVisible: false});
        } else {
          this.setState({videoVisible:true, textbookVisible: false})
        }
      }

    toggleTextbook = (chapNum) => {
      if(!this.state.textbookVisible && !this.state.chapterSelected) {
        this.setState({textbookVisible: true, chapterSelected: chapNum})
      } if(this.state.textbookVisible && this.state.chapterSelected) {
        const lastChapterSelected = this.state.chapterSelected
        if(chapNum !== lastChapterSelected){
          this.setState({textbookVisible: true, chapterSelected: chapNum});
        } else {
          this.setState({textbookVisible:false})
        }
      } if(!this.state.textbookVisible && this.state.chapterSelected) {
        this.setState({textbookVisible: true, chapterSelected: chapNum})
      }
    }
    
    
      renderPlaylists = () => {
        if(this.state.videoVisible){
          return (
            <Playlist playlist={this.props.playlist}/>
          )
        } else {
          return null
        }
      }

      renderChapterNumbers = () => {
        const chapters = this.props.chapters
        const chapterNumbers = Object.keys(chapters)
        return chapterNumbers.map((chapNum) => {
          return <Chapter clickEvent={()=>this.toggleTextbook(chapNum)} chapterNumber={chapNum}/>
        })
      }

      renderTextbook = () => {
        if(this.state.textbookVisible && this.props.chapters[0] === "none"){
          return null
        } else if (this.state.textbookVisible) {
          const link = this.props.chapters[this.state.chapterSelected];
          return(
            <Textbook
            link={link}/>
          )
        } else {
          return null
        }
      }
     
    render() {
        return(
            <div className="lecture" style={{width:"100%"}} >
              <div className="lectureRow">
                <div style={{width:"15%"}}><Checkbox style={{height:50, width: 50}} onClick={this.handleAddProgress} onChange={this.handleCheck} value={this.state.checked}/></div>
                <h4 style={{width:"15%"}}>{this.props.lectureNumber}</h4>
                <h4 style={{width:"30%"}}>{this.props.title}</h4>
                <div style={{width:"30%", display:"flex"}}>{this.renderChapterNumbers()}</div>
                <i className="material-icons" style={{cursor: "pointer", width:"10%"}} onClick={this.toggleVideo}>play_circle_outline</i>
              </div>
              <div>{this.renderPlaylists()}</div>
        <div>{this.renderTextbook()}</div>
            </div>
        )
    }
}

export default Lecture

