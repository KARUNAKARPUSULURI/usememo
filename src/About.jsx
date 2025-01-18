import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { aboutContext } from './App'

const About = () => {
  const name = useContext(aboutContext)
  console.log(name)


  const hi = useNavigate()
  const handleNavigate = () => {
    // window.location.href = "/"
    // window.history.back()
    hi("/abou")
  }
  return (
    <div>
      <h1>This is About Page</h1>
      <button type='button' onClick={handleNavigate}>Go to Home page</button>
      {name}
    </div>
  )
}

export default About