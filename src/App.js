import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
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

  render() {
    return (
      <div className="App">
        {this.state.profiles.map((profile) => {
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
