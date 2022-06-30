import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList profiles={filteredProfiles} />
      </div>
    );
  }
}

export default App;
