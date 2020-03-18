import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  flipCard = (e) => {
    e.target.src === this.props.pokemon.sprites.front ? e.target.src = this.props.pokemon.sprites.back :e.target.src = this.props.pokemon.sprites.front
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.flipCard} className="image">
            <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
