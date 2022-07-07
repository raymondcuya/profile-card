import { Component } from 'react';

import './card-list.styles.css';
class CardList extends Component {
  render() {
    const { profiles } = this.props;
    return (
      <div className="card-list">
        {profiles.map((profile) => {
          const { name, email, id } = profile;
          return (
            <div className="card-container">
              <img
                alt={`profile ${profile.name}`}
                src={`https://robohash.org/${profile.id}?set=set5&size=180x180`}
              />
              <h2>{profile.name}</h2>
              <p>{profile.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
