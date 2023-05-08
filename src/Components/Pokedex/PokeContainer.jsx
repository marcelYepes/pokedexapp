import React, {useEffect, useState} from "react"
import useFetch from "../../hooks/useFetch"
import PokeCard from "./PokeCard"
import {Pagination} from "./Pagination"
import "./styles/pokeContainer.css"

const PokeContainer = ({formUrl}) => {
  const [pokeCards, setPokeCards] = useState([])
  const [pokemons, getAllPokemons] = useFetch(formUrl)
  const [pokesPerPage, setPokesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * pokesPerPage
  const firstIndex = lastIndex - pokesPerPage

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])

  useEffect(() => {
    if (pokemons?.results) {
      setPokeCards(pokemons?.results)
    } else if (pokemons?.pokemon) {
      setPokeCards(pokemons.pokemon.map(objPoke => objPoke.pokemon))
    }
  }, [pokemons])

  return (
    <>
      <div className="poke__container">
        {pokemons?.results
          ? pokemons?.results
              .slice(firstIndex, lastIndex)
              .map(pokemon => <PokeCard key={pokemon.url} url={pokemon.url} />)
          : pokemons?.pokemon
              .slice(firstIndex, lastIndex)
              .map(objPoke => (
                <PokeCard key={objPoke.pokemon.url} url={objPoke.pokemon.url} />
              ))}
      </div>
      <Pagination
        pokesPerPage={pokesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokes={pokeCards.length}
      />
    </>
  )
}

export default PokeContainer
