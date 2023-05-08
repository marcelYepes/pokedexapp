import React from "react"
import FormNameUser from "../Components/Home/FormNameUser"
import "./styles/home.css"

const Home = () => {
  return (
    <div className="home__container">
      <img className="home__img" src="./pokedex.png" alt="Pokedex" />
      <h2 className="home__subtitle">Hi Trainer</h2>
      <p className="home__info">Please give us your name to star</p>
      <FormNameUser />
      <footer>
        <img className="home__footer" src="./homeFooter.svg" alt="" />
      </footer>
    </div>
  )
}

export default Home
