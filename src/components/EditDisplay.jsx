import React from 'react';
import data from '../../data.json';
class EditDisplay extends React.Component {
  // Sends updated title to parent.
  handleTitleChange = event => {
    this.props.setTitle(event.target.value);
  };

  // Sends updated description to parent.
  handleDescriptionChange = event => {
    this.props.setDescription(event.target.value);
  };

  // Sends updated image url to parent.
  handleImgChange = event => {
    this.props.setImgUrl(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="edit-box">
          <span>Title:</span>
          <input
            onChange={this.handleTitleChange}
            type="text"
            className="input"
            value={this.props.title}
            placeholder={data.episode.title}
          />
          <br />
          <span>Description:</span>
          <input
            onChange={this.handleDescriptionChange}
            type="text"
            className="input"
            value={this.props.description}
            placeholder={data.episode.description}
          />
          <br />
          <span>Image URL:</span>
          <input
            onChange={this.handleImgChange}
            type="text"
            className="input"
            value={this.props.imgUrl}
            placeholder={data.episode.image_url}
          />
          <br />
          <button className="btn" onClick={e => this.props.setEdits(e)}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default EditDisplay;
