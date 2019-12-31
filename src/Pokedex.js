import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    this.props.isWinner
      ? (title = <h1 className="Pokedex-winner">Winning Hand</h1>)
      : (title = <h1 className="Pokedex-loser">Losing Hand</h1>);
    return (
      <div className="Pokedex">
        {title}
        <p>Total Experience:{this.props.exp}</p>
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
