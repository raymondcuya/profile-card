import { useState } from 'react';
import { useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setProfiles(users));
  }, []);

  useEffect(() => {
    const newFilteredProfiles = profiles.filter((profile) => {
      return profile.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredProfiles(newFilteredProfiles);
  }, [profiles, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Profile Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search profiles"
        className="search-box"
      />
      <CardList profiles={filteredProfiles} />
    </div>
  );
};

export default App;
