import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {Outlet, useNavigate} from "react-router-dom"

const ProtectedRoutes = () => {
  const {trainerName} = useSelector(state => state)

  const navigate = useNavigate()

  if (trainerName.length >= 3) {
    return <Outlet />
  } else {
    navigate("/")
  }
}

export default ProtectedRoutes
