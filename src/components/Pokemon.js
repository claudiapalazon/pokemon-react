import React from "react";
import "../stylesheets/PokemonCard.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const typesList = this.props.pokemon.types.map((type, index) => {
      return (
        <li key={index} className="pokeType">
          {type}
        </li>
      );
    });
    return (
      <section className="pokeCard--sec">
        <img
          className="pokeImg"
          src={this.props.pokemon.url}
          alt={this.props.pokemon.name}
        />
        <h2 className="pokeName">{this.props.pokemon.name}</h2>
        <ul className="typeList">{typesList}</ul>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default Pokemon;
