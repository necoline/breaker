import React from 'react';
import data from '../../data.json';

class EditDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="episode-data">
          <span>{this.props.formatDate()}</span>
          <br />
          <span>Title:</span>
          <input
            onChange={this.handleTitleChange}
            type="text"
            className="input"
            value={this.state.title}
            placeholder={data.episode.title}
          />
          <br />
          <span>Description:</span>
          <input
            onChange={this.handleDescriptionChange}
            type="text"
            className="input"
            value={this.state.title}
            placeholder={data.episode.description}
          />
          <br />
          <button className="btn" onClick={this.props.toggleEdit}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default EditDisplay;
