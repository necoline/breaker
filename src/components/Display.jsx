import React from 'react';
import data from '../../data.json';
import ShowDisplay from './ShowDisplay';
import EditDisplay from './EditDisplay';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  formatDate() {
    const date = new Date(data.episode.published_at);
    const locale = 'en-us';
    const month = date.toLocaleString(locale, { month: 'long' });
    return month + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  toggleEdit = e => {
    console.log('togggggggle', this.state.isEditing);
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <div className="episode-content">
        {this.state.isEditing ? (
          <EditDisplay formatDate={this.formatDate} toggleEdit={this.toggleEdit} />
        ) : (
          <ShowDisplay formatDate={this.formatDate} toggleEdit={this.toggleEdit} />
        )}
      </div>
    );
  }
}
export default Display;
