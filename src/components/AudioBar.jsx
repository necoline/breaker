import React from 'react';
import { Line } from 'rc-progress';
import data from '../../data.json';

class AudioBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audioFile: new Audio(data.episode.enclosure_url),
      playingPercentage: 0,
    };
    // Timeloop will be updated to interval once component has mounted
    this.timeLoop = null;
  }

  componentDidMount() {
    this.timeLoop = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeLoop);
  }

  updateTime = () => {
    const { audioFile } = this.state;
    const playingPercentage = (audioFile.currentTime / audioFile.duration) * 100;
    this.setState({ playingPercentage });
  };

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  changePlayStatus = status => () => {
    this.togglePlay();
    return this.state.audioFile[status]();
  };

  onSkipAhead = () => {
    return (this.state.audioFile.currentTime += 30.0);
  };

  onSkipBack = () => {
    return (this.state.audioFile.currentTime -= 30.0);
  };

  durationsDisplay = () => {
    const { currentTime, duration } = this.state.audioFile;
    if (!duration) return;
    const formatTime = time => {
      const totalSeconds = Math.floor(time);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds}`;
    };

    return `${formatTime(currentTime)} - ${formatTime(duration)}`;
  };

  render() {
    return (
      <div>
        <div className="progress">
          <Line percent={this.state.playingPercentage} strokeWidth=".5" strokeColor="#ea80fc" />
        </div>
        <div className="audio-menu">
          <a onClick={this.onSkipBack}>
            <img src="../public/stylesheet/back.svg" alt="back" className="icon audio-btn" />
          </a>
          {!this.state.isPlaying ? (
            <a onClick={this.changePlayStatus('play')}>
              <img src="../public/stylesheet/play.svg" alt="play" className="icon audio-btn" />
            </a>
          ) : (
            <a onClick={this.changePlayStatus('pause')}>
              <img src="../public/stylesheet/pause.svg" alt="pause" className="icon audio-btn" />
            </a>
          )}
          <a onClick={this.onSkipAhead}>
            <img src="../public/stylesheet/forward.svg" alt="forward" className="icon audio-btn" />
          </a>
          <div className="duration-display"> {this.durationsDisplay()} </div>
        </div>
      </div>
    );
  }
}
export default AudioBar;
