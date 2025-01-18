import React, { useContext, useMemo } from 'react'
import { mycontext } from './App'
import GrandChild from './GrandChild'

const Child = React.memo(({ incre }) => {

    const name = useContext(mycontext)

    console.log(name)

    return (
        <div>
            <button onClick={incre}>Count in child component</button>
            <GrandChild />
        </div>
    )
})
export default Child
