import React from "react"
import FormNameUser from "../Components/Home/FormNameUser"
import "./styles/home.css"

const Home = () => {
  return (
    <div className="home__container">
      <img className="home__img" src="./mainImg.jpg" alt="Pokedex" />
      <h2 className="home__subtitle">Hi Trainer</h2>
      <p className="home__info">Please give us your name to star</p>
      <FormNameUser />
    </div>
  )
}

export default Home
