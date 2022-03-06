import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => ({ monsters: data }),
          () => console.log('Updated state', data)
        )
      )
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
