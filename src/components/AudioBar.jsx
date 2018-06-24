import React from 'react';

class AuidoBar extends React.Component {
  render() {
    return (
      <div className="audio-menu">
        <img src="../public/stylesheet/back.svg" alt="play" className="icon audio-btn" />
        <img src="../public/stylesheet/play.svg" alt="play" className="icon audio-btn" />
        <img src="../public/stylesheet/forward.svg" alt="play" className="icon audio-btn" />
      </div>
    );
  }
}
export default AuidoBar;
