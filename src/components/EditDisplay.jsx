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
      <div className="edit-box">
        <span className="title-font line-item">Edit Episode</span>
        <div className="line-item">
          <span>Title:</span>
          <input
            onChange={this.handleTitleChange}
            type="text"
            className="input"
            value={this.props.title}
            placeholder={data.episode.title}
          />
        </div>
        <span className="line-item">Description:</span>
        <textarea
          onChange={this.handleDescriptionChange}
          type="text"
          className="input line-item"
          value={this.props.description}
          placeholder={data.episode.description}
        />
        <div className="line-item">
          <span>Image URL:</span>
          <input
            onChange={this.handleImgChange}
            type="text"
            className="input"
            value={this.props.imgUrl}
            placeholder={data.episode.image_url}
          />
        </div>
        <button className="btn" onClick={e => this.props.setEdits(e)}>
          Save
        </button>
      </div>
    );
  }
}
export default EditDisplay;
