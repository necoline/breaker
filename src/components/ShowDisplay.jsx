import React from 'react';
import data from '../../data.json';

class ShowDisplay extends React.Component {
  render() {
    return (
      <div>
        <a onClick={e => this.props.toggleEdit(e)}>
          <img src="../public/stylesheet/edit.svg" alt="edit" className="edit" />
        </a>
        <img src="../public/stylesheet/more.svg" alt="more" className="more" />
        <img src={this.props.imgUrl} className="img" alt={data.episode.title} />
        <div className="episode-data">
          <span>{this.props.formatDate()}</span>
          <br />
          <span>{this.props.title}</span>
          <br />
          <span>{this.props.description}</span>
        </div>
      </div>
    );
  }
}
export default ShowDisplay;
