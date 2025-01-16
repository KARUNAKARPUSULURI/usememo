// // import { useEffect, useMemo, useState } from 'react'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)
// //   const [count2, setCount2] = useState(0)

// //   const complexLogic = () => {
// //     console.log("hi")
// //     let sum = 0;
// //     for (let i = 0; i < 1000000000; i++) {
// //       sum += i;
// //     }
// //     return sum
// //   }

// //   const memoisedValue = useMemo(()=>{complexLogic()}, [count])
// //   // const result = useMemo(() => complexLogic(), [])
// //   return (
// //     <>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <button onClick={() => setCount2((count) => count + 1)}>
// //           count1 is {count2}
// //         </button>
// //         {memoisedValue}
// //       </div>
// //     </>
// //   )
// // }

// // export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [search, setSearch] = useState("")
//   const data = ["karunakar", "chaitanya", "hemanth", "harish", "saiteja", "manivardhan", "vijay", "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",, "chaitanya", "hemanth", "harish", "saiteja", "manivardhan",]

//   const searchedValue = () => {
//     console.log("searching...")
//     return data.filter((v, i) => v.includes(search))
//   }

//   const memoizedValue = useMemo(searchedValue, [search])

//   return (
//     <div className='card'>
//       <input type='text' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
//       {
//         memoizedValue.map((v, i) => (
//           <>
//             <ul>
//               <li key={i}>{v}</li>
//             </ul>
//           </>
//         ))
//       }
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  // console.log(useNavigate())


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      
    </div>
  )
}

export default App
