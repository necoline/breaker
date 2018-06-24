import React from 'react';
import podcasts from './api/podcasts.js';
import AudioBar from './components/AudioBar.jsx';
import Display from './components/Display.jsx';

class Landing extends React.Component {
  componentDidMount() {
    podcasts.fetch().then(result => {
      console.log('check', result.data);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Display />
        </div>
        <nav className="bottom-nav">
          <AudioBar />
        </nav>
      </div>
    );
  }
}
export default Landing;
