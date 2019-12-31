import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 8, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 66, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 88, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 16, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 99, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 100, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>Total Experience:{this.props.exp}</p>
        <p>{this.props.isWinner ? "You Win" : "You Lose"}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(data => (
            <Pokecard
              key={data.id}
              id={data.id}
              name={data.name}
              type={data.type}
              base_experience={data.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
