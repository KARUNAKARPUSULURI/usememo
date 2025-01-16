import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate =  useNavigate()

    const handleNavigate = () => {
        // window.location.href = "/about"
        navigate("/about")

        fetch().then((res)=> {
            if(res.status == 200){
                navigate("/about")
            }
        })
    }
  return (
    <div>
      <h1>Hi this is home component</h1>
      <button type='button' onClick={handleNavigate}>Go to About page</button>
    </div>
  )
}

export default Home
