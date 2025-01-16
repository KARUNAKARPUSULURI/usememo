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

