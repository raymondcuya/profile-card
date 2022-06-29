import { Component } from 'react';

class CardList extends Component {
  render() {
    const { profiles } = this.props;
    return (
      <div>
        {profiles.map((profile) => (
          <h1 key={profile.id}>{profile.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
