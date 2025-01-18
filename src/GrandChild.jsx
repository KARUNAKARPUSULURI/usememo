import React, { useContext } from 'react'
import { mycontext } from './App'

const GrandChild = () => {
    const name = useContext(mycontext)

    console.log(name)

    return (
        <div>GrandChild</div>
    )
}

export default GrandChild