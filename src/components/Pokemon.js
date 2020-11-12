import React from "react";
import "../stylesheets/PokemonCard.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    console.log(this.props.pokemon);
    const typesList = this.props.pokemon.types.map((type, index) => {
      return (
        <li key={index} className="pokeType">
          {type}
        </li>
      );
    });
    return (
      <section>
        <img src={this.props.pokemon.url} alt={this.props.pokemon.name} />
        <h2>{this.props.pokemon.name}</h2>
        <ul>{typesList}</ul>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default Pokemon;
