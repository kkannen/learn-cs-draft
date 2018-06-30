import React, { Component } from 'react';
import './App.css';
import lects from "./list-of-links"
import Lecture from "./components/Lecture"
import LinearProgress from '@material-ui/core/LinearProgress';
import Sidebar from "./components/Sidebar"


class App extends Component {

    state = {
      lecturesCompleted: 0,
      progress: 0
    }

    addProgress = () => {
      const numberOfLectures = Object.keys(lects).length;
      const percentageToChange = 100/numberOfLectures;
      const percentageDone = percentageToChange * (this.state.lecturesCompleted +1)
      this.setState({lecturesCompleted: this.state.lecturesCompleted + 1, progress: percentageDone})
    }

    subtractProgress = () => {
      const numberOfLectures = Object.keys(lects).length;
      const percentageToChange = 100/numberOfLectures;
      const percentageDone = percentageToChange * (this.state.lecturesCompleted - 1)
      this.setState({lecturesCompleted: this.state.lecturesCompleted - 1, progress: percentageDone})
    }

  renderLectures = () => {
    const lectures = Object.keys(lects);
    return lectures.map((lecture, index) => {

      const playlistLink = "https://www.youtube.com/embed?listType=playlist&list=" + lects[lecture]["playlist"];
      const title = lects[lecture]["title"]
      const chapters = lects[lecture]["reading"];
      return (
      <Lecture 
      key={index} 
      lectureNumber={index+1}
      title={title}
      chapters={chapters}
      playlist={playlistLink}
      addToProgress={this.updateProgress}
      addProgress={this.addProgress}
      subtractProgress={this.subtractProgress}/>
    )
    })
  }

  renderProgress = () => {
    if (this.state.progress < 100) {
      return (
        <LinearProgress style={{width:"50%", marginLeft: "25%", height: 15, marginBottom: 20}} color="secondary" variant="determinate" value={this.state.progress} />
      )
    } else{
      return (
        <div>
          <h1 style={{justifySelf: "center"}}>COMPLETED</h1>
          <LinearProgress style={{width:"50%", marginLeft: "25%", height: 15}} variant="determinate" value={this.state.progress} />
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar progress={this.state.progress}/>
        <div style={{width: "75%", marginLeft:"25%", textAlign:"center"}}>
        <h1 style={{justifySelf: "center"}}>Structure and Interpretation of Computer Programs</h1>
          <h3>Some helpful resources:</h3>
          <p>download a python interpreter</p>
          <p>download Git</p>
          <p>Download a code editor-- vs code or atom</p>
          Progress:
          {this.renderProgress()}
          {this.renderLectures()}
        </div>
      </div>
    );
  }
}

export default App;
