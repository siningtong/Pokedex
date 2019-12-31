import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    const { name, type, base_experience } = this.props;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type:{type}</div>
        <div className="Pokecard-data">EXP:{base_experience}</div>
      </div>
    );
  }
}
export default Pokecard;
