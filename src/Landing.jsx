import React from 'react';
import podcasts from './api/podcasts.js';

class Landing extends React.Component {
  componentDidMount() {
    podcasts.fetch().then(result => {
      console.log('check', result.data);
    });
  }

  render() {
    return (
      <div className="landing">
        <div>this works</div>
        <div>this works</div>
      </div>
    );
  }
}
export default Landing;
