import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
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
    </div>
  )
}

export default About