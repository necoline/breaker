import React from 'react';
import data from '../../data.json';

class AuidoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audioFile: new Audio(data.episode.enclosure_url),
    };
  }

  componentDidMount;
  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  onPlay = () => {
    this.togglePlay();
    return this.state.audioFile.play();
  };

  onPause = () => {
    this.togglePlay();
    return this.state.audioFile.pause();
  };

  onSkipAhead = () => {
    console.log('skipping');
    return (this.state.audioFile.currentTime += 30.0);
  };

  onSkipBack = () => {
    console.log('skipping');
    return (this.state.audioFile.currentTime -= 30.0);
  };

  render() {
    return (
      <div className="audio-menu">
        <div className="progress-bar" />
        <a onClick={this.onSkipBack}>
          <img src="../public/stylesheet/back.svg" alt="back" className="icon audio-btn" />
        </a>
        {!this.state.isPlaying ? (
          <a onClick={this.onPlay}>
            <img src="../public/stylesheet/play.svg" alt="play" className="icon audio-btn" />
          </a>
        ) : (
          <a onClick={this.onPause}>
            <img src="../public/stylesheet/pause.svg" alt="pause" className="icon audio-btn" />
          </a>
        )}
        <a onClick={this.onSkipAhead}>
          <img src="../public/stylesheet/forward.svg" alt="forward" className="icon audio-btn" />
        </a>
      </div>
    );
  }
}
export default AuidoBar;
