import React from "react";
import "../stylesheets/PokeList.scss";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const pokeList = this.props.list.map((poke) => {
      return (
        <li key={poke.id} className="pokeCard">
          <Pokemon pokemon={poke} />
        </li>
      );
    });
    return (
      <main className="main">
        <h1>Mi lista de pokemon</h1>
        <ul className="pokeList">{pokeList}</ul>
      </main>
    );
  }
}

PokeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PokeList;
