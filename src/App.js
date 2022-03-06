import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          type='search'
          className='search-box'
          placeholder='search monsters'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => ({ searchField }));
          }}
        />
        {filteredMonsters.map((monster) => {
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
