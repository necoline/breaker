import React from 'react';
import data from '../../data.json';
import ShowDisplay from './ShowDisplay';
import EditDisplay from './EditDisplay';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: data.episode.title,
      description: data.episode.description,
      imgUrl: data.episode.image_url,
    };
  }

  // Sets edited title.
  setTitle = title => {
    this.setState({ title });
  };

  // Sets edited description.
  setDescription = description => {
    this.setState({ description });
  };

  // Sets edited image url.
  setImgUrl = imgUrl => {
    this.setState({ imgUrl });
  };

  // Sets edited description and toggles the view.
  setEdits(e) {
    this.toggleEdit(e);
    // const changes = {
    //   this.state.title,
    //   this.state.description,
    //   this.state.imgUrl;
    // }
    // podcasts.patch(changes).then(result => {
    //   console.log('check', result.data);
    // });
  }

  // Formats date to show long version
  formatDate() {
    const date = new Date(data.episode.published_at);
    const locale = 'en-us';
    const month = date.toLocaleString(locale, { month: 'long' });
    return month + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  // Toggles the podcast info between display and edit views.
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <div className="episode-content">
        {this.state.isEditing ? (
          <EditDisplay
            formatDate={this.formatDate}
            toggleEdit={this.toggleEdit}
            setTitle={this.setTitle}
            setDescription={this.setDescription}
            setImgUrl={this.setImgUrl}
            setEdits={this.setEdits}
          />
        ) : (
          <ShowDisplay
            formatDate={this.formatDate}
            toggleEdit={this.toggleEdit}
            title={this.state.title}
            description={this.state.description}
            imgUrl={this.state.imgUrl}
          />
        )}
      </div>
    );
  }
}
export default Display;
