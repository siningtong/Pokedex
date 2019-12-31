import React, { Component } from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`
    const { id, name, type, base_experience } = this.props
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type:{type}</div>
        <div>EXP:{base_experience}</div>
      </div >

    )
  }
}
export default Pokecard;