import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: '1234',
          name: 'Linda',
        },
        {
          id: '234',
          name: 'Frank',
        },
        {
          id: '345',
          name: 'Jacky',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        <h1></h1>
      </div>
    );
  }
}

export default App;
