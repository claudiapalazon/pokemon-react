import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
    };
  }
  render() {
    return <PokeList list={this.state.pokemons} />;
  }
}

export default App;
