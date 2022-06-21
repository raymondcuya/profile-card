import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { profiles: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { profiles, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredProfiles = profiles.filter((profile) => {
      return profile.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search profile"
          onChange={onSearchChange}
        />
        {filteredProfiles.map((profile) => {
          return (
            <div key={profile.id}>
              <h1>{profile.name}</h1>
            </div>
          );
        })}
        <h1></h1>
      </div>
    );
  }
}

export default App;
