import React, { createContext } from 'react'
import Child from './Child'
import About from './About'

export const Mycontext = createContext("")
export const AboutContext = createContext("")

const App = () => {
  const name = "Deekshith"

  const about = "this value is for about"

  // console.log(createContext("karunakar"))  //it is an object
  return (
   <>
   <Mycontext.Provider value= {name}>
    <Child />
   </Mycontext.Provider>

    <aboutContext.Provider value={about}>
      <About />
    </aboutContext.Provider>
   </>
  )
}

export default App





















// import axios from 'axios'
// import React, { useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const getData = () => {
//    return axios.post()
//   }

//   // const getData = () => {
//   //   const res = fetch("https://jsonplaceholder.typicode.com/posts").then((re) => re.json())
//   //   console.log(res)
//   // }
//   getData().then((Res)=> setData(Res.data))

//   console.log("data",data)
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React, { memo } from 'react'
// import { useState } from 'react'
// import { useMemo } from 'react'
// import { useEffect } from 'react'
// import { useCallback } from 'react'
// import Child from './Child'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(5)

//   const incre = useCallback(() => {
//     console.log("this is use callback")
//     setCount(count => count + 1)
//   }, [count])

//   const incre2 = () => {
//     setCount2(count => count + 1)
//   }

//   return (
//     <div>
//       <h3>{count}</h3>
//       <Child incre= {incre} />
//       <p>-----------------------------------------</p>
//       <h3>{count2}</h3>
//       <button onClick={incre2}>Count2 in parent component</button>
//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [counter, setCounter] = useState(0);

//   const data = [
//     'karunakar',
//     'chaitanya',
//     'hemanth',
//     'harish',
//     'saiteja',
//     'manivardhan',
//     'vijay',
//   ];

//   const filteredData = useMemo(() => {
//     console.log('Filtering with useMemo...');
//     return data.filter((v) => v.toLowerCase().includes(search.toLowerCase()));
//   }, [search]);

//   return (
//     <div>
//       <h1>Search and Filter Example</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <div>
//         <p>Counter: {counter}</p>
//         <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useMemo, useState } from 'react';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [counter, setCounter] = useState(0);

//   const data = [
//     'karunakar',
//     'chaitanya',
//     'hemanth',
//     'harish',
//     'saiteja',
//     'manivardhan',
//     'vijay',
//   ];

//    const filteredData = useMemo(() => {
//     console.log('Filtering...');
//     return data.filter((v) => v.toLowerCase().includes(search.toLowerCase()));
//   }, [search]);

//   return (
//     <div>
//       <h1>Search and Filter Example</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <div>
//         <p>Counter: {counter}</p>
//         <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useMemo, useState } from 'react';

// function WithoutUseMemoExample() {
//   const [count, setCount] = useState(0);
//   const [otherCount, setOtherCount] = useState(0);

//   // Expensive calculation
//   const expensiveCalculation = useMemo(() => {
//     console.log('Running expensive calculation...');
//     let sum = 0;
//     for (let i = 0; i < 100000000; i++) {
//       sum += i;
//     }
//     return sum;
//   }, [])

//   // const calculatedValue = expensiveCalculation(); // This runs on every render

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Other Count: {otherCount}</p>
//       {/* <p>Calculated Value: {calculatedValue}</p> */}
//       <p>Calculated Value: {expensiveCalculation}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setOtherCount(otherCount + 1)}>
//         Increment Other Count
//       </button>
//     </div>
//   );
// }

// export default WithoutUseMemoExample;




// import { useEffect, useMemo, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)

//   const complexLogic = useMemo(() => {
//     console.log("hi")
//     let sum = 0;
//     for (let i = 0; i < 100000000; i++) {
//       sum += i;
//     }
//     return sum
//   }, [count])

//   // const memoisedValue = useMemo(complexLogic, [count])
//   // const result = useMemo(() => complexLogic(), [])
//   return (
//     <>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => setCount2((count) => count + 1)}>
//           count1 is {count2}
//         </button>
//         {complexLogic}
//       </div>
//     </>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [search, setSearch] = useState("")
//   const data = ["karunakar", "chaitanya", "hemanth", "harish", "saiteja", "manivardhan", "vijay"]

//   const searchedValue = () => {
//     console.log("searching...")
//     return data.filter((v, i) => v.includes(search))
//   }

//   // const memoizedValue = useMemo(searchedValue, [search])

//   return (
//     <div className='card'>
//       <input type='text' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
//       {
//         searchedValue().map((v, i) => (
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


// import React from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Home from './Home'
// import About from './About'

// const App = () => {
//   // console.log(useNavigate())


//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//       </Routes>
      
      
//     </div>
//   )
// }

// export default App
