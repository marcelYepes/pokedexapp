import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'

const FormNameUser = () => {

const inputName = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

const handleSubmit = e => {
  e.preventDefault()
  dispatch(setTrainerName(inputName.current.value.trim()))  
  navigate('/pokedex')
 }

  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>Star</button>
    </form>
  )
}

export default FormNameUser