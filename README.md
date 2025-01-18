# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Usememo:-
problem statement:- you have table, either you are doing filtering or sorting, like if i change one state value, componenet or any other state values gets trigerred or not?

incase if you are working with large datasets or more number of api calls ?? usememo

getusers() -> you making a request -> 1000 || 100000 || 10000000, you are filtering 70ms, optimization -> performance
Answer:-

1.useState :- manages state, re-render
2. useEffect:- side effects -> it is triggered after component is rendered
3. usememo:- it is triggered during rendering only

1000000000

useEffect(()=>{}, [])

3. usememo:- 
onst value = useMemo(()=>{}, []) 
{value}





what if you have multiple states in your component? 

sort
search
filter
counter


when you have large datasets, then use usememo to optimize it, 

what does usememo returns -> memoized value or you can say cached value.

<!-- useMemo(, [])

arg1:- callback
arg2:- deps -->

useCallback() -> to memoize functions, and ensure that the same function is recreated when that particular state updates
useCallback(() => {}, []) -> memoized function

parent component:- counter app -> useCallback(increment function, [count]) :- <Child incre = { increFunc }/>, search -> 
child component:-  { increFunc} -> button -> onClick = { increFunc}


when to use useCallback:- 
1. when you have a function that is being passed as a prop to a child component
2. when you have a function that is being passed as a callback to a parent component
3. when you have a function that is being used in a useEffect hook

-----------------

what is HOF ?  -> 
a function that is receiving another function as an argument is called HOF

generally, a function that is passed as an argument to another function is called callback function

what is pure funtions? 
pure function is a function that always returns the same output for the same input, and does not have
any side effects



useContext hook:- 
1. to share data between components tree without passing the data explcitly through props at every component

2. context provides a global data store that allows components to consume ||receive values 

3. it helps us to avoid prop drilling, means that it happens when you have to pass data through multiple components just to read the value in one nested component.

how to create the context? 

in react we have this called createContext function, using this function we create the context 

createContext, create a context object, and this object is returning two components one is Provider and another is consumer

when we create context, that context name should be starting from capital letter

import React, {createContext} from "react"

createContext()

here we have two things:- 

1. Provider:- what does provider do> :- to make the data avaiable to all nested (child ) components

2. Consumer:- what does consumer do? it allows components to consume or receive or read the data from the context




how do we pass data? between component? 
using props -> parent to child or child to parent

Nested component :- A:- name = "karunakar" {B {C {D}}}

context :- global data store (arrays, objects, numbers, strings so on..)

A :- name = "karunakar" {:- B :- C:- D}



Abhiram :- wants to send a parcel  (providers)

mahesh :- receving  (receivers)

