import React, {useState} from "react"
import {useSelector} from "react-redux"
import FormPoke from "../Components/Pokedex/FormPoke"
import PokeContainer from "../Components/Pokedex/PokeContainer"
import "./styles/pokedex.css"

const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"

  const [formUrl, setFormUrl] = useState(urlBase)

  const {trainerName} = useSelector(state => state)

  return (
    <div>
      <div className="header__img">
        <img src="./header.png" alt="" />
        <img className="header__pokedex" src="./pokedex.png" alt="" />
      </div>
      <p className="header__greeting">
        <span className="header__name">Welcome {trainerName}</span>, here you
        can find your favorite Pokemon
      </p>

      <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
      <PokeContainer formUrl={formUrl} />
    </div>
  )
}

export default Pokedex
