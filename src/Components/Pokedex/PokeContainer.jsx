import React, {useEffect, useState} from "react"
import useFetch from "../../hooks/useFetch"
import PokeCard from "./PokeCard"
import {Pagination} from "./Pagination"

const PokeContainer = ({formUrl}) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl)
  const totalPokes = pokemons?.results.length
  const [pokesPerPage, setPokesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])

  return (
    <div className="poke-container">
      {pokemons?.results
        ? pokemons?.results.map(pokemon => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))
        : pokemons?.pokemon.map(objPoke => (
            <PokeCard key={objPoke.pokemon.url} url={objPoke.pokemon.url} />
          ))}
      <Pagination
        pokesPerPage={pokesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokes={totalPokes}
      />
    </div>
  )
}

export default PokeContainer
