import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      age: 36,
      note: "Allegeric to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
