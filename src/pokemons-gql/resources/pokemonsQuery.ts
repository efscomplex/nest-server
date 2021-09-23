import { gql } from 'graphql-request'

export default gql`
  {
    pokemons {
      results {
        name
        id
        image
        artwork
        dreamworld
      }
    }
  }
`
