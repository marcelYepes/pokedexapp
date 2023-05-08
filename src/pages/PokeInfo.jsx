import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "./styles/pokeInfo.css"

const PokeInfo = () => {
  const {name} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemonByName, hasError] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  }, [name])

  return (
    <div>
      {hasError ? (
        <h1>This pokemon does not exist</h1>
      ) : (
        <>
          <div className="header__img">
            <img src="./header.png" alt="" />
            <img className="header__pokedex" src="./pokedex.png" alt="" />
          </div>
          <header className={`header__poke bg-${pokemon?.types[0].type.name}`}>
            <img
              className="poke__img"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <section className="poke__info">
            <section className="poke__info-basic">
              <p className="poke__number">#{pokemon?.id}</p>
              <h2 className={`poke__name color-${pokemon?.types[0].type.name}`}>
                {pokemon?.name}
              </h2>
              <ul className="poke__size">
                <li className="poke__size-item">
                  Peso <div className="size-value">{pokemon?.weight}</div>
                </li>
                <li className="poke__size-item">
                  Altura <div className="size-value">{pokemon?.height}</div>
                </li>
              </ul>
              <article className="card__type">
                <div className="card__info">
                  <h2 className="card__type-title">Type</h2>
                  <ul className="card__type-info">
                    {pokemon?.types.map((pokeType, index) => (
                      <li
                        className={`card__type-poke bg-${
                          pokemon.types[0].type.name
                        } ${index === 1 ? "bg-" + pokeType.type.name : ""}`}
                        key={pokeType.type.url}
                      >
                        {pokeType.type.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card__abilities">
                  <h2 className="card__ab-title">Abilities</h2>
                  <ul className="card__ab-info">
                    {pokemon?.abilities.map(ability => (
                      <li className="card__ab-poke" key={ability.ability.url}>
                        {ability.ability.name.charAt(0).toUpperCase() +
                          ability.ability.name.slice(1)}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="stats__container">
                <h2 className="stats__title">Stats</h2>
                <ul className="stats__info">
                  {pokemon?.stats.map(pokeStat => (
                    <li className="poke__stats" key={pokeStat.stat.url}>
                      <div className="poke__stats-info">
                        <span className="stats__label">
                          {pokeStat.stat.name.charAt(0).toUpperCase() +
                            pokeStat.stat.name.slice(1)}
                        </span>
                        <span className="stats__value">
                          {pokeStat.base_stat} / 150
                        </span>
                      </div>
                      <progress
                        className="stats-progress"
                        value={pokeStat.base_stat}
                        max="100"
                      ></progress>
                    </li>
                  ))}{" "}
                </ul>
              </article>
            </section>
            <article className="poke__movements">
              <h2 className="move__title">Movements</h2>
              <ul className="move_card">
                {pokemon?.moves.slice(0, 25).map(move => (
                  <li className="move__item" key={move.move.url}>
                    {move.move.name}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </>
      )}
    </div>
  )
}

export default PokeInfo
