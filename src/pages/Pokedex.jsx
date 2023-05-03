import React, {useState} from "react"
import {useSelector} from "react-redux"
import FormPoke from "../Components/Pokedex/FormPoke"
import PokeContainer from "../Components/Pokedex/PokeContainer"

const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

  const [formUrl, setFormUrl] = useState(urlBase)

  const {trainerName} = useSelector(state => state)

  return (
    <div>
      <h1>Pokedex</h1>
      <p>
        <span>Welcome {trainerName}</span>
      </p>
      <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
      <PokeContainer formUrl={formUrl} />
    </div>
  )
}

export default Pokedex
