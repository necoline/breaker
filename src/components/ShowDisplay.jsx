import React from 'react';
import { func } from 'prop-types';
import data from '../../data.json';

class ShowDisplay extends React.Component {
  static propTypes = {
    toggleEdit: func.isRequired,
  };

  render() {
    return (
      <div>
        <img src="../public/stylesheet/edit.svg" alt="edit" className="edit" onClick={e => this.props.toggleEdit(e)} />
        <img src="../public/stylesheet/more.svg" alt="more" className="more" />
        <img src={data.episode.image_url} className="img" alt={data.episode.title} />
        <div className="episode-data">
          <span>{this.props.formatDate()}</span>
          <br />
          <span>{data.episode.title}</span>
          <br />
          <span>{data.episode.description}</span>
        </div>
      </div>
    );
  }
}
export default ShowDisplay;
