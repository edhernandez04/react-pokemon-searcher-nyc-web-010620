import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allMonsters: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({allMonsters : pokemon})
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemon={this.state.allMonsters}/>
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemon={this.state.allMonsters}/>
      </Container>
    )
  }
}

export default PokemonPage
